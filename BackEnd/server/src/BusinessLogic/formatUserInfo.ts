import { UserInfoModel } from "./../Entities/DatabaseTypes"

export default function formatUserInfo(username: string, password: string, email: string): UserInfoModel {
  return {
    username,
    password,
    email,
    role: 'User',
    date_joined: (new Date()).toISOString()
  }
}