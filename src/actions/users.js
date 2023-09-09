import { RECEIVE_USERS } from "./types";

export function receive_users(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}
