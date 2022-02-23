import { UserIdentification } from 'src/modules/user/shared/dtos/find-user.dto';

export class SearchUserCommand {
  readonly email?: string;
  readonly username?: string;

  constructor(props: UserIdentification) {
    this.email = props.email;
    this.username = props.username;
  }
}
