"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeMadule = void 0;
const common_1 = require("@nestjs/common");
const home_service_1 = require("./home.service");
const home_controller_1 = require("./home.controller");
const mongoose_1 = require("@nestjs/mongoose");
const home_schema_1 = require("./schemas/home.schema");
let HomeMadule = class HomeMadule {
};
HomeMadule = __decorate([
    common_1.Module({
        providers: [home_service_1.HomeService],
        controllers: [home_controller_1.HomeController],
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: home_schema_1.Home.name, schema: home_schema_1.HomeSchema }
            ])
        ]
    })
], HomeMadule);
exports.HomeMadule = HomeMadule;
//# sourceMappingURL=home.madule.js.map