import ViewModel from "./../view-model.js"
import ShopInfoViewModel from "./shop-info-view-model"
import UserInfoViewModel from "./user-info-view-model.js"

export default class userAccountViewModel extends ViewModel {
  constructor() {
    super()
    this.fields = {
      userInfo: new UserInfoViewModel(),
      shopInfo: new ShopInfoViewModel()
    }
  }

  mapFieldsFromApi(data) {
    const userInfos = new UserInfoViewModel()
    const shopInfos = new ShopInfoViewModel()
    userInfos.mapFieldsFromApi(data.userAuthInfo)
    shopInfos.mapFieldsFromApi(data.shopBasicInfo)

    return {
      userInfo: userInfos,
      shopInfo: shopInfos
    }
  
  }
}