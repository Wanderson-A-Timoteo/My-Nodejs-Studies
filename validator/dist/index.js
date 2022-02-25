"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validator_1 = __importDefault(require("validator"));
let email = 'wanderson_timoteo@hotmail.com';
let ip = '192.190.0.12';
// Verifica se é um e-mail valido e retorna true ou false
console.log(validator_1.default.isEmail('wanderson_timoteo@hotmail.com'));
console.log(validator_1.default.isEmail('gyibufiuybfuy'));
console.log(validator_1.default.isEmail(email));
// Verifica se é um endereço de IP valido
console.log(validator_1.default.isIP(ip));
