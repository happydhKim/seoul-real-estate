const host = 'http://openapi.molit.go.kr';

export default {
  국토교통부_토지_매매_신고_조회_서비스: `${host}/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcLandTrade`,
  국토교통부_아파트_분양권전매_신고_자료: `${host}/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcSilvTrade`,
  국토교통부_상업업무용_부동산_매매_신고_자료: `${host}/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcNrgTrade`,
  국토교통부_아파트매매_실거래_상세_자료: `${host}/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTradeDev`,
  국토교통부_연립다세대_전월세_자료: `${host}:8081/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcRHRent`,
};
