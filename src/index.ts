import 'reflect-metadata'

function Injectable() {
  return function (target: any) {
    return target
  }
}

class AuthService {
  constructor() {}
}

@Injectable()
export class UserService {
  constructor(private authService: AuthService) {}
}
