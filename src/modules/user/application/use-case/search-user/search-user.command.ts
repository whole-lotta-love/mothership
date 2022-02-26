import { UserIdentification } from '@user/shared/dtos';

export class SearchUserCommand {
  readonly email?: string;
  readonly username?: string;

  constructor(props: UserIdentification) {
    this.email = props.email;
    this.username = props.username;
  }
}
