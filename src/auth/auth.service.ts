import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as argon2 from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { TUser } from './types/user.type';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.findOne(email);
    const passwordIsMatch = await argon2.verify(user.password, pass);
    if (user ) {
      return user;
    }

    throw new UnauthorizedException('Incorrect email or password');
  }

  async login(user: TUser) {
    const { id, email } = user;

    return {
      id,
      email,
      token: this.jwtService.sign({ id, email }),
    };
  }
}
