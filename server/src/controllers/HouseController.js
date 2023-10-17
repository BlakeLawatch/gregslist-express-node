import { dbContext } from "../db/DbContext.js";
import { houseService } from "../services/HouseService.js";
import BaseController from "../utils/BaseController.js";

export class HouseController extends BaseController {
    constructor() {
        super('api/houses')
        this.router
            .get('', this.getHouse)
            .get('/:houseId', this.getHouseById)
    }
    async getHouse(request, response, next) {
        try {
            const house = await houseService.getHouse()
            return response.send(house)
        } catch (error) {
            next(error)
        }
    }
    async getHouseById(request, response, next) {
        try {

        } catch (error) {
            next(error)
        }
    }
}