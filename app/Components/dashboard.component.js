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
var core_1 = require('@angular/core');
var QuestionService_1 = require('./../Services/QuestionService');
var DashboardComponent = (function () {
    function DashboardComponent(_questionService) {
        var _this = this;
        this._questionService = _questionService;
        this._questionService.getUsersPageData()
            .subscribe(function (a) {
            _this.usersroot = a;
            console.log(a);
        });
    }
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'users',
            providers: [QuestionService_1.QuestionService],
            templateUrl: './../views/Dashboard.html'
        }), 
        __metadata('design:paramtypes', [QuestionService_1.QuestionService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map