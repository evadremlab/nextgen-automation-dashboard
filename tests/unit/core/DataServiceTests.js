'use strict';

describe('DataService:Tests', function() {
  var $httpBackend, service, config;

  var SERVICE_REQUEST = {
    AGENCY_PORTLETS: { mockPath: 'console/', endPoint: 'portlets' }
  };

  beforeEach(function() {
    module('accela.automation');

    inject(function(_$httpBackend_, DataService, CONFIG) {
      $httpBackend = _$httpBackend_;
      service = DataService;
      config = CONFIG;

      config.USE_MOCK_SERVICES = true;
      config.LOG_CLIENT_ERRORS = false;
      config.CONSOLE_LOGGING_ENABLED = false;
    });
  });

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should defined the service', function() {
    expect(service).toBeDefined();
  });

  it('should defined the service interface', function() {
    expect(service.get).toBeDefined();
    expect(service.post).toBeDefined();
    expect(service.getServiceUrl).toBeDefined();
  });

  it('should create a valid serviceUrl', function () {
    var serviceRequest = SERVICE_REQUEST.AGENCY_PORTLETS;
    var serviceUrl = service.getServiceUrl(serviceRequest);

    expect(serviceUrl).toBeDefined();
    expect(serviceUrl).toEqual('mock-api/console/portlets.json');
  });

  it('should get agency portlets', function () {
    var data;
    var serviceRequest = SERVICE_REQUEST.AGENCY_PORTLETS;
    var serviceUrl = service.getServiceUrl(serviceRequest);

    $httpBackend.expect('POST', serviceUrl).respond(200, Accela.Utils.XmlHttp.getMockData(serviceUrl));

    service.get(serviceRequest).then(function(response) {
      console.log(JSON.stringify(response));
      data = response.data;
    });

    $httpBackend.flush();

    expect(data).toBeDefined();
    expect(data.status).toBeDefined();
    expect(data.status.code).toEqual('OK');
    expect(data.content.length).toBe(122);
    expect(data.content[0].source).toBeDefined();
  });
});