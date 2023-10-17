import { Auth0Provider } from "@bcwdev/auth0provider";
import { houseService } from "../services/HouseService.js";
import BaseController from "../utils/BaseController.js";

export class HouseController extends BaseController {
    constructor() {
        super('api/houses')
        this.router
            .get('', this.getHouse)
            .get('/:houseId', this.getHouseById)

            .use(Auth0Provider.getAuthorizedUserInfo)

            .post('', this.createHouse)
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
            const houseId = await request.params.houseId
            const house = await houseService.getHouseById(houseId)
            return response.send(house)
        } catch (error) {
            next(error)
        }
    }
    async createHouse(request, response, next) {
        try {
            const houseData = request.body
            const userInfo = request.userInfo
            houseData.creatorId = userInfo.id
            const house = await houseService.createHouse(houseData)
            return response.send(house)
        } catch (error) {
            next(error)
        }
    }


}