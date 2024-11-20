import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { get } from 'http';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    if (!body.email || !body.password) {
      return { message: 'Informe e-mail e senha para efetuar o login' };
    }
    const usuario = await this.authService.validateUsuario(body.email, body.password);
    if (usuario) {
      return this.authService.login(usuario);
    }
    return { message: 'Usuário ou senha inválidos' };
  }

  @Post('getDadosUsuarioLogado')
  async getDadosUsuarioLogado(@Body() body: { email: string; password: string }) {
    if (!body.email || !body.password) {
      return { message: 'Informe e-mail e senha para efetuar o login' };
    }
    const usuario = await this.authService.validateUsuario(body.email, body.password);
    if (usuario) {
      return usuario
    }
    return { message: 'Usuário ou senha inválidos' };
  }
}