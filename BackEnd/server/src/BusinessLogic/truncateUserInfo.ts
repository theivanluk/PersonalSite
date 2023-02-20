import { UserDatabaseModel } from "./../Entities/DatabaseTypes";

export default function truncateUserInfo(userInfoInput: UserDatabaseModel) {
  const { username, user_id }: { username: string, user_id: number }  = userInfoInput;
  return {
    user_id,
    username
  }
}