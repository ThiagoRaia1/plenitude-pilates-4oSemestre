import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: { login: string; senha: string }) {
    if (!body.login || !body.senha) {
      return { message: 'Informe e-mail e senha para efetuar o login' };
    }
    const usuario = await this.authService.validateUsuario(body.login, body.senha);
    if (usuario) {
      return this.authService.login(usuario);
    }
    return { message: 'Usuário ou senha inválidos' };
  }
}