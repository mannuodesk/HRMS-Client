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
var UsersComponent = (function () {
    function UsersComponent(_questionService) {
        var _this = this;
        this._questionService = _questionService;
        this._questionService.getUsersPageData()
            .subscribe(function (a) {
            _this.usersroot = a;
            _this.uniqueUserCount = _this.usersroot.uniqueUserTotal;
            _this.totalReviews = _this.usersroot.reviewsTotal;
            _this.returnRate = _this.usersroot.returnRate;
            _this.customerVisitsToBranches = _this.usersroot.customerRatings;
            for (var i = 0; i < _this.customerVisitsToBranches.length; i++) {
                _this.dateTime = new Date(_this.customerVisitsToBranches[i].date);
                _this.customerVisitsToBranches[i].rating = Math.round(_this.customerVisitsToBranches[i].rating);
                var tempDate = _this.dateTime.getDate().toString() + "-" + _this.dateTime.getMonth().toString() + "-" + _this.dateTime.getFullYear().toString();
                var time = _this.dateTime.getHours().toString() + ":" + _this.dateTime.getMinutes().toString();
                _this.customerVisitsToBranches[i].vistedDateString = tempDate;
                _this.customerVisitsToBranches[i].vistedTimeString = time;
                console.log(_this.dateTime);
            }
            console.log(_this.customerVisitsToBranches);
        });
    }
    UsersComponent = __decorate([
        core_1.Component({
            selector: 'users',
            providers: [QuestionService_1.QuestionService],
            templateUrl: './../views/Users.html'
        }), 
        __metadata('design:paramtypes', [QuestionService_1.QuestionService])
    ], UsersComponent);
    return UsersComponent;
}());
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map