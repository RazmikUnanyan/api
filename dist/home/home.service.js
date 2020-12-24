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
exports.HomeService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const home_schema_1 = require("./schemas/home.schema");
const mongoose_2 = require("@nestjs/mongoose");
let HomeService = class HomeService {
    constructor(homeModel) {
        this.homeModel = homeModel;
        this.home = [];
    }
    async getAll() {
        return this.homeModel.find().exec();
    }
    async getById(id) {
        return this.homeModel.findById(id).exec();
    }
    async create(homeDto) {
        const newHome = new this.homeModel(homeDto);
        return newHome.save();
    }
    async remove(id) {
        return this.homeModel.findByIdAndRemove(id);
    }
    async update(id, homeDto) {
        return this.homeModel.findByIdAndUpdate(id, homeDto, { new: true });
    }
};
HomeService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel(home_schema_1.Home.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], HomeService);
exports.HomeService = HomeService;
//# sourceMappingURL=home.service.js.map