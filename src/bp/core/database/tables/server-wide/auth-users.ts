import Knex from 'knex'
import _ from 'lodash'

import { Table } from 'core/database/interfaces'
import { saltHashPassword } from 'core/services/auth/util'

const USERS = ['admin']
const PASSWORD = '123456'

const insertUsers = async (knex: Knex, tableName: string) => {
  const saltHashed = saltHashPassword(PASSWORD)
  return knex
    .batchInsert(
      tableName,
      USERS.map((username, index) => ({
        id: index + 1,
        username,
        password: saltHashed.hash,
        salt: saltHashed.salt,
        firstname: username,
        lastname: username
      }))
    )
    .then()
}

export class AuthUsersTable extends Table {
  name: string = 'auth_users'

  bootstrap() {
    return this.knex
      .createTableIfNotExists(this.name, table => {
        table.increments('id')
        table
          .string('username')
          .unique()
          .notNullable() // validate: { len: [3, 30] }
        table.string('password').notNullable()
        table.string('salt').notNullable()
        table.string('firstname')
        table.string('lastname')
        table.string('picture')
        table.string('company')
        table.string('last_ip')
        table.string('email') // validate: { isEmail: true }
        table.string('location')
        table.timestamps(true, true)
      })
      .then(async created => {
        if (created) {
          await insertUsers(this.knex, this.name)
        }
        return created
      })
  }
}
