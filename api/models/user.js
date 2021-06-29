const bcrypt = require("bcrypt")
const { BCRYPT_WORK_FACTOR } = require("../config")
const db = require("../db")
const { BadRequestError, UnauthorizedError } = require("../utils/errors")

class User {
  static makePublicUser(user) {
    return {
      id: user.id,
      username: user.username,
      isAdmin: user.is_admin,
      createdAt: user.created_at,
    }
  }

  static async login(credentials) {
    const requiredFields = ["username", "password"]
    requiredFields.forEach((property) => {
      if (!credentials.hasOwnProperty(property)) {
        throw new BadRequestError(`Missing ${property} in request body.`)
      }
    })

    const user = await User.fetchUserByUsername(credentials.username)
    if (user) {
      const isValid = await bcrypt.compare(credentials.password, user.password)
      if (isValid) {
        return User.makePublicUser(user)
      }
    }

    throw new UnauthorizedError("Invalid username/password")
  }

  static async register(credentials) {
    const requiredFields = ["username", "password", "isAdmin"]
    requiredFields.forEach((property) => {
      if (!credentials.hasOwnProperty(property)) {
        throw new BadRequestError(`Missing ${property} in request body.`)
      }
    })

    // if (credentials.email.indexOf("@") <= 0) {
    //   throw new BadRequestError("Invalid email.")
    // }

    const existingUser = await User.fetchUserByUsername(credentials.username)
    if (existingUser) {
      throw new BadRequestError(`A user already exists with username: ${credentials.username}`)
    }

    const hashedPassword = await bcrypt.hash(credentials.password, BCRYPT_WORK_FACTOR)
    // const normalizedEmail = credentials.email.toLowerCase()

    const userResult = await db.query(
      `INSERT INTO users (password, username, is_admin)
       VALUES ($1, $2, $3)
       RETURNING id, username, is_admin, created_at;
      `,
      [hashedPassword, credentials.username, credentials.isAdmin]
    )
    const user = userResult.rows[0]

    return User.makePublicUser(user)
  }

  static async fetchUserByUsername(username) {
    if (!username) {
      throw new BadRequestError("No username provided")
    }

    const query = `SELECT * FROM users WHERE username = $1`

    const result = await db.query(query, [username])

    const user = result.rows[0]

    return user
  }
}

module.exports = User