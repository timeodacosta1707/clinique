"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimauxModule = void 0;
const common_1 = require("@nestjs/common");
const animaux_service_1 = require("./animaux.service");
const animaux_controller_1 = require("./animaux.controller");
const typeorm_1 = require("@nestjs/typeorm");
const animaux_entity_1 = require("./entities/animaux.entity");
let AnimauxModule = class AnimauxModule {
};
exports.AnimauxModule = AnimauxModule;
exports.AnimauxModule = AnimauxModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([animaux_entity_1.Animaux])],
        controllers: [animaux_controller_1.AnimauxController],
        providers: [animaux_service_1.AnimauxService],
    })
], AnimauxModule);
//# sourceMappingURL=animaux.module.js.map