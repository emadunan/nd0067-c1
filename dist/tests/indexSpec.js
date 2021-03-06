"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../index"));
const sharp_resize_1 = __importDefault(require("../utilities/sharp-resize"));
const request = (0, supertest_1.default)(index_1.default);
describe("API Endpoints tests:", () => {
    describe("Test endpoint response", () => {
        it("gets /api/images endpoint", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield request.get("/api/images");
            expect(response.status).toBe(200);
        }));
    });
    describe("Utility tests:", () => {
        it("Expect not to throw an error", () => __awaiter(void 0, void 0, void 0, function* () {
            const result = yield (0, sharp_resize_1.default)("santamonica", 300, 300);
            expect(() => result).not.toThrowError();
        }));
        it("Expect to return santamonica_300_300.jpg", () => __awaiter(void 0, void 0, void 0, function* () {
            const result = yield (0, sharp_resize_1.default)("santamonica", 300, 300);
            expect(result).toEqual("santamonica_300_300.jpg");
        }));
        it("Expect to return santamonica_200_250.jpg", () => __awaiter(void 0, void 0, void 0, function* () {
            const result = yield (0, sharp_resize_1.default)("santamonica", 200, 250);
            expect(result).toEqual("santamonica_200_250.jpg");
        }));
        it("Expect to return santamonica_400_300.jpg", () => __awaiter(void 0, void 0, void 0, function* () {
            const result = yield (0, sharp_resize_1.default)("santamonica", 400, 300);
            expect(result).toEqual("santamonica_400_300.jpg");
        }));
    });
});
