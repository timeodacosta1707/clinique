"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimauxService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const animaux_entity_1 = require("./entities/animaux.entity");
let AnimauxService = class AnimauxService {
    animauxRepository;
    constructor(animauxRepository) {
        this.animauxRepository = animauxRepository;
    }
    create(createAnimauxDto) {
        const animalData = { ...createAnimauxDto };
        if (createAnimauxDto.clientId) {
            animalData.client = { id: Number(createAnimauxDto.clientId) };
        }
        else {
            delete animalData.client;
        }
        const nouvelAnimal = this.animauxRepository.create(animalData);
        return this.animauxRepository.save(nouvelAnimal);
    }
    findAll() {
        return this.animauxRepository.find({
            relations: ['client']
        });
    }
    findOne(id) {
        return this.animauxRepository.findOne({
            where: { id },
            relations: ['client']
        });
    }
    update(id, updateAnimauxDto) {
        return this.animauxRepository.update(id, updateAnimauxDto);
    }
    remove(id) {
        return this.animauxRepository.delete(id);
    }
};
exports.AnimauxService = AnimauxService;
exports.AnimauxService = AnimauxService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(animaux_entity_1.Animaux)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AnimauxService);
//# sourceMappingURL=animaux.service.js.map