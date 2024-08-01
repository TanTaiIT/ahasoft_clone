import ViewModel from "../view-model"

export default class UserInfoViewModel extends ViewModel {
  constructor() {
    super()
    this.fields = {
      shop_id: 0,
      chain_id: 0,
      shop_name: '',
      branch_type: 0,
      chain_info: {},
      branch_number: 0,
      phone_number: '',
      solution_name: '',
      overdue_months: 0,
      share_client: false,
      chain_board_type: 0,
      netmoney_balance: 0,
      share_service: false,
      share_product: false,
      auto_transfer: false,
      service_type_code: '',
      business_type_code: '',
      allow_shop_service: false,
      allow_shop_product: false,
      use_other_shop_prepaidgoods: false,
    }
  }

  mapFieldsFromApi(data) {
    // console.log('data', data)
      this.fields.shop_id = data.shopId,
      this.fields.user_name = data.userID,
      this.fields.country = data.countryCode,
      this.fields.user_full_name = data.name,
      this.fields.api_token = data.authToken,
      this.fields.user_id = data.userAccountId,
      this.fields.solution_id = data.solutionId,
      this.fields.user_role_code = data.userRoleCode,
      this.fields.language = data.language?.toLowerCase(),
      this.fields.shop_user_role_id = data.shopUserRoleId,
      this.fields.timezone = '+07 =00',
      this.fields.refresh_token = data.refreshToken || null,
      this.fields.lastest_login_date = data.lastestLoginDate,
      this.fields.shop_user_role_code = data.shopUserRoleCode,
      this.fields.format_date = 'YYYY-MM-DD',
      this.fields.is_temporary_password = data.isTemporaryPassword,
      this.fields.token_expired_date_time_ts = data.tokenExpiredDateTimeTS,
      this.fields.is_client_searched_in_branches = data.isClientSearchedInBranches || false,
      this.fields.refresh_token_expired_date_time_ts = data.refreshTokenExpiredDateTimeTS
    
  }
}