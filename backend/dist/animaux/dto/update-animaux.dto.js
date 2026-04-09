"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAnimauxDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_animaux_dto_1 = require("./create-animaux.dto");
class UpdateAnimauxDto extends (0, mapped_types_1.PartialType)(create_animaux_dto_1.CreateAnimauxDto) {
}
exports.UpdateAnimauxDto = UpdateAnimauxDto;
//# sourceMappingURL=update-animaux.dto.js.map