import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { UsuarioService } from 'src/usuario/usuario.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usuarioService: UsuarioService,
  ) {}

  async validateUsuario(email: string, senha: string) {
    // Buscamos o usuário pelo e-mail
    const usuario = await this.usuarioService.findOneByEmail(email);
    // Verificamos se o usuário existe e se a senha está correta
    if (usuario && bcrypt.compareSync(senha, usuario.senha)) {
      // Se o usuário existe e a senha está correta retornamos o usuário
      return usuario;
    }
    // Caso contrário retornamos null
    return null;
  }

  async login(usuario: Usuario) {
    // Geramos o token JWT
    const payload = { login: usuario.login, id: usuario.id };
    return {
      usuario,
      access_token: this.jwtService.sign(payload),
    };
  }
}