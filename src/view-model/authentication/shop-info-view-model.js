import ViewModel from "../view-model"

export default class ShopInfoViewModel extends ViewModel {
  
  constructor() {
    super()
    this.fields = {
      user_id: 0,
      shop_id: 0,
      country: '',
      language: '',
      timezone: '',
      user_name: '',
      api_token: '',
      solution_id: 0,
      format_date: '',
      refresh_token: '',
      user_full_name: '',
      user_role_code: '',
      shop_user_role_id: 0,
      lastest_login_date: '',
      shop_user_role_code: '',
      is_temporary_password: false,
      token_expired_date_time_ts:0,
      is_client_searched_in_branches: false,
      refresh_token_expired_date_time_ts: 0
    }
  }

  mapFieldsFromApi(data) {
    this.fields = {
      shop_id: data.shopId,
      shop_name: data.shopName,
      phone_number: data.phoneNumber,
      chain_id: data.chainInfo.chainId,
      solution_name: data.solutionName,
      auto_transfer: data.autoTransfer,
      overdue_months: data.overdueMonths,
      branch_type: data.chainInfo.branchType,
      netmoney_balance: data.netmoneyBalance,
      service_type_code: data.serviceTypeCode,
      share_client: data.chainInfo.shareClient,
      business_type_code: data.businessTypeCode,
      branch_number: data.chainInfo.branchNumber,
      share_service: data.chainInfo.shareService,
      share_product: data.chainInfo.shareProduct,
      chain_board_type: data.chainInfo.boardType,
      allow_shop_service: data.chainInfo.allowShopService,
      allow_shop_product: data.chainInfo.allowShopProduct,
      chain_info: data.chainInfo,
      use_other_shop_prepaidgoods: data.chainInfo.useOtherShopPrepaidGoods,
    }
  }
}