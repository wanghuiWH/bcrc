webpackJsonp([0], [function (e, t) {
    e.exports = window.$
}, , , , , , , , , , , , , , , , , function (e, t, n) {
    "use strict";
    n(1), n(2), n(3), n(18);
    var o, a = n(0), i = (o = a) && o.__esModule ? o : {"default": o};
    n(19), n(20), n(4), n(21), n(22), n(23), n(5), n(6), n(7), n(8), n(9), n(10), n(11), n(12), n(13), n(24), n(14), n(15), n(16), n(25), (0, i["default"])(document).ready(function () {
        if (document.getElementById("announcementbody")) {
            var e = new ScrollText("announcementbody", "", "", "", 40);
            e.Amount = 1, e.Delay = 20, e.Start()
        }
        document.getElementById("resumeGuideTopics") && document.getElementById("resumeGuideTopicsBody") && new NewScrollText("resumeGuideTopics", "resumeGuideTopicsBody", 24, 0, 2).initMarquee()
    })
}, function (e, t) {
}, function (e, t, n) {
    "use strict";
    var o;
    $(document).ready(function () {
        if ($(window).scroll(function () {
            var e = 0;
            e = $(".dw_tlc").eq(0).hasClass("fix") ? $("#dw_tlc_mk").offset().top : $(".dw_tlc").eq(0).offset().top, $(this).scrollTop() > e ? ($(".dw_tlc").hasClass("fix") || ($("#dw_tlc_mk").height($(".dw_tlc").eq(0).height() + 2), $(".dw_tlc").eq(0).addClass("fix").hide(), $(".dw_tlc.fix").fadeIn(500)), $("[event-type='13']").attr("event-type", 18), $("[event-type='14']").attr("event-type", 19)) : ($("#dw_tlc_mk").height(0), $(".dw_tlc").eq(0).removeClass("fix"), $("[event-type='18']").attr("event-type", 13), $("[event-type='19']").attr("event-type", 14))
        }), $(".dw_filter .el .more").click(function () {
            var e = $(this).parents(".el");
            e.hasClass("on") ? e.removeClass("on") : e.addClass("on")
        }), $("#search_company_ad").length > 0) {
            var e = {cusParam: "1" + String.fromCharCode(22) + trackConfig.accountid + String.fromCharCode(22) + $.trim($("#kwdselectid").val()) + String.fromCharCode(22) + ("000000" == $("#jobarea").val() ? "" : $("#jobarea").val()) + String.fromCharCode(22) + $("#coad_companyid").val()};
            manualTrack("adShowManualTrack", e)
        }
        $(".com_close").click(function () {
            $(".company").hide()
        })
    }), $(document).mouseup(function () {
        $(".tSearch_select_list").find(".intPopbox").hide()
    }), window.search = function (e, t) {
        var n = "00", o = "0000", a = "000000", i = "2", r = "99", s = "99", l = "99", c = "99", d = "99", m = "99",
            u = $("input[name='postchannel']").length > 0 && "" != $("input[name='postchannel']").val() ? $("input[name='postchannel']").val() : "0000",
            v = "9", p = "0,0", h = "0", k = "0", f = "", g = "", w = "", _ = "-1";
        1 == $("#indtype_code").length && "" != $("#indtype_code").val() && (n = $("#indtype_code").val()), 1 == $("#funtype_code").length && "" != $("#funtype_code").val() && (o = $("#funtype_code").val()), 1 == $("#jobarea").length && "" != $("#jobarea").val() && (a = $("#jobarea").val()), 1 == $("#keywordtype").length && "" != $("#keywordtype").val() && (i = $("#keywordtype").val()), "" == e && (e = " "), t || (1 == $("form[name=pageForm] input[name=keyword]").length && "" == $.trim(e) && (e = $("form[name=pageForm] input[name=keyword]").val()), "" == e && (e = " "), "" != $("form[name=pageForm] input[name=cotype]").val() && (s = $("form[name=pageForm] input[name=cotype]").val()), "" != $("form[name=pageForm] input[name=workyear]").val() && (r = $("form[name=pageForm] input[name=workyear]").val()), "" != $("form[name=pageForm] input[name=providesalary]").val() && (m = $("form[name=pageForm] input[name=providesalary]").val()), "" != $("form[name=pageForm] input[name=companysize]").val() && (d = $("form[name=pageForm] input[name=companysize]").val()), "" != $("form[name=pageForm] input[name=degreefrom]").val() && (l = $("form[name=pageForm] input[name=degreefrom]").val()), "" != $("form[name=pageForm] input[name=jobterm]").val() && (c = $("form[name=pageForm] input[name=jobterm]").val()), "" != $("form[name=pageForm] input[name=issuedate]").val() && (v = $("form[name=pageForm] input[name=issuedate]").val()), "" != $("form[name=pageForm] input[name=lonlat]").val() && (p = $("form[name=pageForm] input[name=lonlat]").val()), "" != $("form[name=pageForm] input[name=ord_field]").val() && (h = $("form[name=pageForm] input[name=ord_field]").val()), "" != $("form[name=pageForm] input[name=dibiaoid]").val() && (k = $("form[name=pageForm] input[name=dibiaoid]").val()), "" != $("form[name=pageForm] input[name=address]").val() && (f = $("form[name=pageForm] input[name=address]").val()), "" != $("form[name=pageForm] input[name=line]").val() && (g = $("form[name=pageForm] input[name=line]").val()), "" != $("form[name=pageForm] input[name=welfare]").val() && (w = $("form[name=pageForm] input[name=welfare]").val()), "" != $("form[name=pageForm] input[name=radius]").val() && (_ = $("form[name=pageForm] input[name=radius]").val()));
        var y = window.cfg.domain.search + "/list/" + encodeURIComponent(encodeURIComponent(a)) + ",000000," + encodeURIComponent(encodeURIComponent(o)) + "," + encodeURIComponent(encodeURIComponent(n)) + "," + encodeURIComponent(encodeURIComponent(v)) + "," + encodeURIComponent(encodeURIComponent(m)) + "," + encodeURIComponent(encodeURIComponent(e)) + "," + encodeURIComponent(encodeURIComponent(i)) + ",1.html?lang=c&stype=&postchannel=" + u + "&workyear=" + r + "&cotype=" + s + "&degreefrom=" + l + "&jobterm=" + c + "&companysize=" + d + "&providesalary=" + m + "&lonlat=" + encodeURIComponent(p) + "&radius=" + encodeURIComponent(_) + "&ord_field=" + h + "&confirmdate=9&fromType=&dibiaoid=" + k + "&address=" + encodeURIComponent(f) + "&line=" + encodeURIComponent(g) + "&specialarea=00&from=&welfare=" + encodeURIComponent(w);
        window.location = y
    }, window.excludeword = function () {
        if ("" == $.trim($(":input[name=excludekeyword]").val())) return search($(":input[name=keyword]").val(), 0), !1;
        var e = $(":input[name=excludekeyword]").val().replace(/[^\u3040-\u318f\u3100-\u312f\u3040-\u309F\u30A0-\u30FF\u31F0-\u31FF\u3300-\u337f\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff65-\uff9fa-zA-Z0-9@#$%&+']+/g, " ").trim(),
            t = "";
        e && (t = $(":input[name=keyword]").val() + (" " + e).replace(/ +/g, " -")), search(t, 0)
    }, window.collapseExpansionJobareaLine = function (e, t) {
        var n = {add: "show_line", remove: "hide_line", html: "收起"},
            o = {add: "hide_line", remove: "show_line", html: "更多"};
        $("#" + e).hasClass(n.add) ? ($("#" + e).addClass(o.add), $("#" + e).removeClass(o.remove), $(t).html(o.html)) : ($("#" + e).addClass(n.add), $("#" + e).removeClass(n.remove), $(t).html(n.html))
    }, window.showLine = function (e, t, n) {
        window.encodeURIComponent || window.escape;
        if (0 == $("#station_" + t).length) {
            var o = {
                jobarea: "",
                district: "",
                funtype: "",
                industrytype: "",
                issuedate: "",
                providesalary: "",
                keyword: "",
                keywordtype: "",
                postchannel: "",
                workyear: "",
                cotype: "",
                degreefrom: "",
                jobterm: "",
                companysize: "",
                address: "",
                line: "",
                ord_field: "",
                from: "",
                line_now: "",
                welfare: ""
            };
            $.each(o, function (e, t) {
                var a = $('[name="pageForm"] [name="' + e + '"]').val();
                switch (e) {
                    case"jobarea":
                        var i = jobarea = "";
                        -1 != a.indexOf(",") ? (i = a.split(","), jobarea = i[0]) : jobarea = a, o[e] = jobarea;
                        break;
                    case"line":
                        o[e] = $(n).html();
                        break;
                    case"line_now":
                        o[e] = $('[name="pageForm"] [name="line"]').val();
                        break;
                    default:
                        o[e] = a
                }
            });
            var a = e + "/jobsearch/ajax/get_line.php?rand=" + Math.random() + "&jsoncallback=?";
            $.getJSON(a, o, function (e) {
                "" != e.data && ($(".nk").hide(), $(n).addClass("dw_c_orange"), $.each($(n).siblings(), function () {
                    $(this).removeClass("dw_c_orange")
                }), $("#filter_p_line").after(e.data))
            })
        }
        $("#station_" + t).is(":hidden") && ($.each($(".nk"), function () {
            $(this).hide()
        }), $("#station_" + t).show(), $(n).addClass("dw_c_orange"), $.each($(n).siblings(), function () {
            $(this).removeClass("dw_c_orange")
        }))
    }, window.showLineV = function (e, t, n) {
        window.encodeURIComponent || window.escape;
        if (0 == $("#station_" + t).length) {
            var o = {
                jobarea: "",
                district: "",
                funtype: "",
                industrytype: "",
                issuedate: "",
                providesalary: "",
                keyword: "",
                keywordtype: "",
                postchannel: "",
                workyear: "",
                cotype: "",
                degreefrom: "",
                jobterm: "",
                companysize: "",
                address: "",
                line: "",
                ord_field: "",
                from: "",
                line_now: "",
                welfare: ""
            };
            $.each(o, function (e, n) {
                var a = $('[name="pageForm"] [name="' + e + '"]').val();
                switch (e) {
                    case"line":
                        o[e] = t;
                        break;
                    default:
                        o[e] = a
                }
            });
            var a = e + "/jobsearch/ajax/get_line.php?rand=" + Math.random() + "&jsoncallback=?";
            $.getJSON(a, o, function (e) {
                "" != e.data && ($(".nk").hide(), $(n).addClass("dw_c_orange"), $.each($(n).siblings(), function () {
                    $(this).removeClass("dw_c_orange")
                }), $("#filter_p_line").after(e.data))
            })
        }
        $("#station_" + t).is(":hidden") && ($.each($(".nk"), function () {
            $(this).hide()
        }), $("#station_" + t).show(), $(n).addClass("dw_c_orange"), $.each($(n).siblings(), function () {
            $(this).removeClass("dw_c_orange")
        }))
    }, window.showDibiao = function (e, t, n) {
        window.encodeURIComponent || window.escape;
        if (0 == $("#hotdibiao_" + $('[name="pageForm"] [name="jobarea"]').val().substr(0, 6) + "_" + t).length) {
            var o = {
                jobarea: "",
                district: "",
                funtype: "",
                industrytype: "",
                issuedate: "",
                providesalary: "",
                keyword: "",
                keywordtype: "",
                postchannel: "",
                workyear: "",
                cotype: "",
                degreefrom: "",
                jobterm: "",
                companysize: "",
                address: "",
                line: "",
                ord_field: "",
                dibiaoid: "",
                from: "",
                district_now: "",
                welfare: ""
            };
            $.each(o, function (e, n) {
                var a = $('[name="pageForm"] [name="' + e + '"]').val();
                switch (e) {
                    case"jobarea":
                        var i = jobarea = "";
                        -1 != a.indexOf(",") ? (i = a.split(","), jobarea = i[0]) : jobarea = a, o[e] = jobarea;
                        break;
                    case"district":
                        o[e] = t;
                        break;
                    case"district_now":
                        o[e] = $("[name=pageForm] [name=district]").val();
                        break;
                    default:
                        o[e] = a
                }
            });
            var a = e + "/jobsearch/ajax/get_districtdibiao.php?rand=" + Math.random() + "&jsoncallback=?";
            $.getJSON(a, o, function (e) {
                "" != e.data && ($(".nk").hide(), $(n).addClass("dw_c_orange"), $.each($(n).siblings(), function () {
                    $(this).removeClass("dw_c_orange")
                }), $("#filter_p_line").after(e.data))
            })
        }
        $.each($(".nk"), function () {
            $(this).hide()
        }), $(n).addClass("dw_c_orange"), $.each($(n).siblings(), function () {
            $(this).removeClass("dw_c_orange")
        }), $("#hotdibiao_" + $('[name="pageForm"] [name="jobarea"]').val().substr(0, 6) + "_" + t).show()
    }, window.showDibiaoV = function (e, t, n, o) {
        window.encodeURIComponent || window.escape;
        if (0 == $("#hotdibiao_" + $('[name="pageForm"] [name="jobarea"]').val().substr(0, 6) + "_" + t).length) {
            var a = {
                jobarea: "",
                district: "",
                funtype: "",
                industrytype: "",
                issuedate: "",
                providesalary: "",
                keyword: "",
                keywordtype: "",
                postchannel: "",
                workyear: "",
                cotype: "",
                degreefrom: "",
                jobterm: "",
                companysize: "",
                address: "",
                line: "",
                ord_field: "",
                dibiaoid: "",
                welfare: "",
                highlight: !1
            };
            $.each(a, function (e, o) {
                var i = $('[name="pageForm"] [name="' + e + '"]').val();
                switch (e) {
                    case"district":
                        a[e] = t;
                        break;
                    case"highlight":
                        a[e] = n;
                        break;
                    default:
                        a[e] = i
                }
            });
            var i = e + "/jobsearch/ajax/get_district_dibiao.php?rand=" + Math.random() + "&jsoncallback=?";
            $.getJSON(i, a, function (e) {
                "" != e.data && ($(".nk").hide(), $(o).addClass("dw_c_orange"), $.each($(o).siblings(), function () {
                    $(this).removeClass("dw_c_orange")
                }), $("#filter_p_line").after(e.data))
            })
        }
        $.each($(".nk"), function () {
            $(this).hide()
        }), $(o).addClass("dw_c_orange"), $.each($(o).siblings(), function () {
            $(this).removeClass("dw_c_orange")
        }), $("#hotdibiao_" + $('[name="pageForm"] [name="jobarea"]').val().substr(0, 6) + "_" + t).show()
    }, window.collapseExpansion = function (e, t, n) {
        $.ajax({
            type: "get",
            cache: !1,
            url: e + "/jobsearch/ajax/collapse_expansion.php?collapse=" + n + "&type=" + t + "&ran=" + Math.random()
        })
    }, window.showHotdibiaoid = function (e) {
        $(".nk").hide(), $("#filter_p_dibiaoid").show(), $.each($(e).siblings(), function () {
            $(this).removeClass("dw_c_orange")
        }), $(e).addClass("dw_c_orange")
    }, window.showFilterOther = function (e, t) {
        if ($("#otherFilter li").removeClass("on"), o == t) return $(".kel").hide(), o = null, !1;
        $(t).addClass("on");
        $("#" + e).is(":hidden") ? ($.each(["filter_p_jobterm", "filter_p_keyword", "filter_p_jobarea", "filter_p_dibiaoid", "filter_p_line"], function (e, t) {
            $("#" + t).hide()
        }), $("#" + e).show()) : $("#" + e).hide(), $(".nk").hide(), $(".kel").show(), o = t
    }, window.collapseExpansionSearch = function (e, t, n) {
        var o = $(n);
        if ((n = $("." + t)).hasClass("on")) {
            o.find("span").html("展开选项（公司性质、公司规模、工作年限等）<em class='dicon Dm'></em>"), n.removeClass("on"), $("#otherFilter li").removeClass("on"), $(".kel").hide(), collapseExpansion(e, 9, 0);
            $.each(["filter_p_jobterm", "filter_p_keyword", "filter_p_jobarea", "filter_p_dibiaoid", "filter_p_line"], function (e, t) {
                $("#" + t).hide()
            }), $(".nk").hide()
        } else o.find("span").html("收起选项<em class='dicon Dm'></em>"), n.addClass("on"), collapseExpansion(e, 10, 1)
    }, window.selectAllJobs = function (e) {
        $(e).hasClass("on") ? ($("#top_select_all_jobs_checkbox,#bottom_select_all_jobs_checkbox").removeClass("on"), $("em[name='delivery_em']").removeClass("on"), $("input[name='delivery_jobid']").attr("checked", !1), $("div.op span.but_sq,div.op span.but_sc").addClass("uck")) : ($("#top_select_all_jobs_checkbox,#bottom_select_all_jobs_checkbox").addClass("on"), $("em[name='delivery_em']").addClass("on"), $("input[name='delivery_jobid']").attr("checked", !0), $("div.op span.but_sq,div.op span.but_sc").removeClass("uck"))
    }, window.showStatistics = function (e) {
        var t = window.event || arguments.callee.caller.arguments[0];
        $("#" + e).is(":hidden") ? ($("#" + e).show(), $.each($("#" + e).parent().siblings(), function (e, t) {
            $(this).find(".intPopbox").hide()
        })) : $("#" + e).hide(), t.stopPropagation ? t.stopPropagation() : window.event && (window.event.cancelBubble = !0)
    }, window.multipleChoiceShow = function (e, t) {
        t ? ($("div[id^='filter_']").removeAttr("style"), $("#filter_" + e).hide(), $("div[id^='multichoices_']").hide(), $("#submit_" + e).removeClass("unclick"), $("#multichoices_" + e).show(), $("#multichoices_" + e).find("div.err").hide()) : ($("div[id^='multichoices_']").hide(), $("#multichoices_" + e).find("li.on").removeClass("on"), $("#multichoices_" + e).find("li[name='defaultmultichoices']").addClass("on"), $("#filter_" + e).removeAttr("style"))
    }, window.checkMultipleChoice = function (e, t) {
        if ($(e).hasClass("on")) {
            if ($("#multichoices_" + t).find("div.err").hide(), $(e).removeClass("on"), 0 == $("#multichoices_" + t).find("li.on").length) return void $("#submit_" + t).addClass("unclick")
        } else {
            if ("99" == $(e).attr("data-value") ? ($(e).siblings().removeClass("on"), $(e).addClass("on")) : $(e).siblings("li[data-value='99']").removeClass("on"), $("#submit_" + t).removeClass("unclick"), $("#multichoices_" + t).find("li.on").length >= 5) return void $("#multichoices_" + t).find("div.err").show();
            $("#multichoices_" + t).find("div.err").hide(), $(e).addClass("on")
        }
    }, window.submitMultiChoices = function (e) {
        if (!$("#submit_" + e).hasClass("unclick")) {
            var t = [];
            $("#multichoices_" + e).find("li.on").each(function () {
                t.push($(this).attr("data-value"))
            });
            var n = "99";
            n = t == [] ? "99" : t.join(","), $("#" + e).val(n), $(document.getElementsByName("pageForm")).submit()
        }
    }, window.jumpPage = function (e) {
        var t = parseInt($("#jump_page").val());
        t > 0 && t <= e ? window.location.href = $("form[name=pageForm] input[name=pagejump]").val().replace("<<pagecode>>", t) : alert("请输入正确的页码")
    }, window.jobview = function (e) {
        var t = window, n = "_job_img_" + +new Date + ".r" + Math.floor(1e3 * Math.random()), o = t[n] = new Image;
        o.onload = o.onerror = function () {
            t[n] = null
        }, o.src = window.cfg.domain.jobs + "/ajax/addview.php?jobid=" + e + "&" + Math.random()
    }
}, function (e, t, n) {
    "use strict";
    window.delivery = function (e, t, n, o, a, i, r, s, l) {
        "hidden" == $("#deliveryLayer").parent().css("visibility") && $("#deliveryLayer").remove();
        var c = new RegExp("^(?:(?:https?):)/*(?:[^@]+@)?([^:/#]+)").exec(a);
        a = c ? c[1] : a, i = i || "01", Delivery.setPrp(i), Delivery.setPrd(a), Delivery.setImagePath(s);
        var d = document.domain, m = Delivery.getJobStr(e, t), u = $("#rsmId").val(), v = $("#cvLanguage").val(),
            p = $("#coverId").val(), h = $('input:checkbox[name="qPostSet"]:checked').val();
        if (2 != $("#tips").attr("tipid")) if (n = window.cfg.domain.i, "()" != m) {
            var k = {
                jobid: m,
                prd: a,
                prp: i,
                cd: d,
                cp: r,
                resumeid: u,
                cvlan: v,
                coverid: p,
                qpostset: h,
                elementname: e,
                deliverytype: t,
                deliverydomain: n,
                language: o,
                imgpath: s
            };
            $.each(k, function (e, t) {
                void 0 === t && (k[e] = "")
            }), Delivery.loadingLayer(), $.ajax({
                url: n + "/delivery/delivery.php?rand=" + Math.random(),
                type: "GET",
                dataType: "jsonp",
                jsonp: "jsoncallback",
                data: k,
                success: function (e) {
                    "function" == typeof l && Delivery.setCallback(l), Delivery.ajaxCallback(e)
                },
                error: function (e) {
                    alert("error")
                }
            })
        } else alert("请选择职位再投递！"); else alert("您选择的简历不完整，将不能投递，请完善后再投递。")
    }, window.Delivery = function () {
        var e = "", t = "";

        function n(n) {
            var a, i, r = n.layer, s = n.content.html, l = n.content.data;
            a = s, (i = jQuery.FLayer.init()).layer_after_close = function () {
                $(".layer_class, .layer_back_drop_class").remove()
            }, jQuery.FLayer.setContent(i, a), jQuery.FLayer.open(i), function (n, a) {
                "deliverySuccessLayer" == n && (setTimeout('if($("#deliverySuccessLayer").length>0){$(".layer_close").click();}', 2500), $("#app_ck").length > 0 && ($("#app_ck").attr("href", "#").attr("class", "but_sq off").removeAttr("onclick"), $("#app_ck").html('<img width="22" height="22" src="' + e + '/im/jobs/but_img_sq_2.png" alt="" />已申请')), "function" == typeof t && $(".layer_close").click(function () {
                    t()
                }));
                var i = $("#" + n);
                i.find("span.i_arrow").each(function () {
                    var e = $(this), t = e.siblings(".ul");
                    $("body").click(function () {
                        t.hide()
                    }), e.click(function (e) {
                        $("body").click(), e.stopPropagation(), t.show()
                    })
                }), i.find("#apply_now").click(function (e) {
                    e.stopPropagation()
                }), i.find("#resumeSelectList_div_data span").each(function () {
                    $(this).click(function () {
                        i.find("#rsmText").val($(this).text()), i.find("#rsmId").val($(this).attr("data-value")), o(a)
                    })
                }), i.find("#languageSelectList_div_data span").each(function () {
                    $(this).click(function () {
                        i.find("#languageText").val($(this).text()), i.find("#cvLanguage").val($(this).attr("data-value")), o(a)
                    })
                }), i.find("#coverSelect_div_data span").each(function () {
                    $(this).click(function () {
                        i.find("#coverText").val($(this).text()), i.find("#coverId").val($(this).attr("data-value"))
                    })
                });
                var r = i.find('input:checkbox[name="qPostSet"]');
                i.find("#qPostSetEm").click(function () {
                    $(this).find("em").toggleClass("on"), r.is(":checked") ? r.attr("checked", !1) : r.attr("checked", !0)
                }), i.find("#question").css({"background-image": 'url("' + e + '/im/2016/form/form.png")'}), i.find("#question").click(function () {
                    window.open(window.cfg.domain.i + "/resume/help.php?lang=c&module=td")
                }), i.find("#resumeSelectList_div_data span:first").click(), i.find("#languageSelectList_div_data span:first").click(), i.find("#coverSelect_div_data span:first").click()
            }(r, l)
        }

        function o(e) {
            var t = $("#rsmId").val(), n = $("#cvLanguage").val(), o = e[t][n].tip, a = e[t][n].url, i = e[t][n].tipid;
            $("#tips").empty(), $("#tips").attr("tipid", ""), $("#tips").append(o), $("#tips").find("a").click(function () {
                window.open(a)
            }), $("#tips").attr("tipid", i), 2 == i ? $("#apply_now").css("background-color", "#818181").css("border", "#818181") : $("#apply_now").css("background-color", "#f56101").css("border", "#f56101"), $("#tips").show()
        }

        return {
            getJobStr: function (e, t) {
                var n = "", o = 0, a = 0, i = "";
                return 1 == t ? (i = 'input[name="' + e + '"]', $(i).attr("jt")) : i = 3 == t ? "#" + e : 'input:checkbox[name="' + e + '"]:checked', $(i).each(function () {
                    o = $(this).attr("value"), a = $(this).attr("jt"), isNaN(o) && (o = 0), isNaN(a) && (a = ""), n = "" == a ? n + o + "," : n + o + ":" + a + ","
                }), "" != n && (n = n.substring(0, n.length - 1)), "(" + n + ")"
            }, ajaxCallback: function (e) {
                var t = e.type, o = e.content;
                void 0 !== t && void 0 !== o || (t = 1, o = ""), function (e, t) {
                    switch (e) {
                        case 1:
                            alert(t), $(".layer_class, .layer_back_drop_class").length > 0 && $(".layer_close").click();
                            break;
                        case 2:
                            var o = "?url=" + encodeURIComponent(window.location);
                            location.href = t + o;
                            break;
                        case 5:
                            location.href = t;
                            break;
                        case 3:
                            !function (e) {
                                if (t = document.getElementById("aHref")) t.href = e; else {
                                    var t = document.createElement("a");
                                    t.href = e, t.target = "_blank", t.id = "aHref", document.body.appendChild(t)
                                }
                                t.click()
                            }(t), $(".layer_class, .layer_back_drop_class").length > 0 && $(".layer_close").click();
                            break;
                        case 4:
                        default:
                            n(t)
                    }
                }(t, o)
            }, loadingLayer: function () {
                n({
                    layer: "loadingLayer",
                    content: {html: '<div id="loadingLayer"><input type="hidden" class="layer_close" /><p align="center"><img src="' + e + '/im/2009/loading.gif"></p></div>'}
                })
            }, setPrd: function (e) {
                e
            }, setPrp: function (e) {
                e
            }, setImagePath: function (t) {
                e = t || window.cfg.domain.img
            }, setCallback: function (e) {
                t = e
            }
        }
    }()
}, function (e, t, n) {
    "use strict";
    $(document).ready(function () {
        window.cfg.root_userset_ajax = "undefined" == typeof window.cfg.root_userset_ajax ? window.cfg.domain.i + "/userset/ajax" : window.cfg.root_userset_ajax
    }), window.SelectAll = function () {
        return 0 != $('input:checkbox[name="delivery_jobid"]:checked').length
    }, "undefined" == typeof window.needLogin && (window.needLogin = function () {
        "undefined" == typeof window.cfg.domain.login && (window.cfg.domain.login = "https://login.51job.com");
        var e = "?url=" + encodeURIComponent(window.location);
        window.location.href = window.cfg.domain.login + "/login.php" + e
    }), window.SelectAllCheckbox = function (e, t) {
        $(e).hasClass("on") ? ($("em").removeClass("on"), $("em[name='" + t + "']").next("input.checkbox").attr("checked", !1), $("div.op span.but_sq,div.op span.but_sc,div.op span.but_sf").addClass("uck")) : ($("em").addClass("on"), $("em[name='" + t + "']").next("input.checkbox").attr("checked", !0), $("div.op span.but_sq,div.op span.but_sc,div.op span.but_sf").removeClass("uck"))
    }, window.deleteCollection = function (e) {
        var t = [];
        if ("" == e) {
            if (0 == $("input[name='delivery_jobid']:checked").length) return !1;
            $("input[name='delivery_jobid']:checked").each(function () {
                t.push($(this).val())
            }), e = t.join(",")
        }
        var n = jQuery.FLayer.init(),
            o = '<div class="panel_lnp panel_py"><h2><p>提示</p><a href="javascript:void(0)" class="layer_close"><i></i></a></h2><div class="pannel_con"><div class="gp2"><p class="wd center c_666">确认删除已收藏的职位吗？</p></div></div><div class="but_box b2"><span class="p_but" onclick="deleteCollectionConfirm(\'' + e + '\')">确定</span><span class="p_but gray layer_close">取消</span></div></div>';
        return jQuery.FLayer.setContent(n, o), jQuery.FLayer.open(n), !1
    }, window.deleteCollectionConfirm = function (e) {
        $.getJSON(window.cfg.root_userset_ajax + "/collection.php?jsoncallback=?", {
            type: "delete",
            jobid: e
        }, function (e) {
            1 == e.status ? location.reload() : "needlogin" == e.result ? needLogin() : systemError()
        })
    }, window.saveCollection = function (e) {
        var t = [];
        if ("" == e) {
            if (0 == $("input[name='delivery_jobid']:checked").length) return alert("请在要选择的职位前打勾！"), !1;
            $("input[name='delivery_jobid']:checked").each(function () {
                t.push($(this).val())
            }), e = t.join(",")
        }
        $.getJSON(window.cfg.root_userset_ajax + "/collection.php?jsoncallback=?", {
            type: "add",
            jobid: e,
            pageCode: $("#pageCode").val(),
            refdomain: $("#refdomain").val(),
            refpagecode: $("#refpagecode").val()
        }, function (e) {
            var t = '<div class="panel_lnp panel_py"><h2><p>提示</p><a class="layer_close" href="javascript:void(0)"><i></i></a></h2><div class="pannel_con">';
            if (1 == e.status) t += '<div class="gp3"><strong class="wd f16 center c_orange">职位收藏成功！</strong></div>'; else switch (e.result) {
                case 3:
                    t += '<div class="gp3"><p class="wd center c_666">职位已收藏！</p></div>';
                    break;
                case 4:
                    t += '<div class="gp2"><p class="wd center c_666">最多收藏500个职位！</p></div>';
                    break;
                case"needlogin":
                    return void needLogin();
                case 0:
                default:
                    t += '<div class="gp2"><p class="wd center c_666">系统繁忙，请稍后再试！</p></div>'
            }
            t += "</div></div>";
            var n = jQuery.FLayer.init();
            if (jQuery.FLayer.setContent(n, t), jQuery.FLayer.open(n), 1 == e.status) setTimeout(function () {
                jQuery.FLayer.close(n)
            }, 2e3);
            return $("#my_collection_num").html(parseInt($("#my_collection_num").html()) + e.rowcount), !1
        })
    }, window.myrefresh = function (e) {
        var t = $("#operate_" + e).children("a:first");
        "申请" == t.text() && t.replaceWith("已申请")
    }, window.checkboxClick = function (e) {
        $(e).hasClass("on") ? $(e).removeClass("on").next("input:checkbox").attr("checked", !1) : $(e).addClass("on").next("input:checkbox").attr("checked", !0), 0 == $('input:checkbox[name="delivery_jobid"]:checked').length ? $("div.op span.but_sq,div.op span.but_sc,div.op span.but_sf").addClass("uck") : $("div.op span.but_sq,div.op span.but_sc,div.op span.but_sf").removeClass("uck")
    }
}, function (e, t, n) {
    "use strict";
    window.ScrollText = function (e, t, n, o, a) {
        this.Delay = 10, this.LineHeight = a || 20, this.Amount = 1, this.Direction = "up", this.Timeout = 1500, this.ScrollContent = this.$(e), this.ScrollContent.innerHTML += this.ScrollContent.innerHTML, n && (this.NextButton = this.$(n), this.NextButton.onclick = this.GetFunction(this, "Next"), this.NextButton.onmouseover = this.GetFunction(this, "Stop"), this.NextButton.onmouseout = this.GetFunction(this, "Start")), t && (this.PreviousButton = this.$(t), this.PreviousButton.onclick = this.GetFunction(this, "Previous"), this.PreviousButton.onmouseover = this.GetFunction(this, "Stop"), this.PreviousButton.onmouseout = this.GetFunction(this, "Start")), this.ScrollContent.onmouseover = this.GetFunction(this, "Stop"), this.ScrollContent.onmouseout = this.GetFunction(this, "Start"), o && this.Start()
    }, ScrollText.prototype.$ = function (e) {
        return document.getElementById(e)
    }, ScrollText.prototype.Previous = function () {
        clearTimeout(this.AutoScrollTimer), clearTimeout(this.ScrollTimer), this.Scroll("up")
    }, ScrollText.prototype.Next = function () {
        clearTimeout(this.AutoScrollTimer), clearTimeout(this.ScrollTimer), this.Scroll("down")
    }, ScrollText.prototype.Start = function () {
        clearTimeout(this.AutoScrollTimer), this.AutoScrollTimer = setTimeout(this.GetFunction(this, "AutoScroll"), this.Timeout)
    }, ScrollText.prototype.Stop = function () {
        clearTimeout(this.ScrollTimer), clearTimeout(this.AutoScrollTimer)
    }, ScrollText.prototype.AutoScroll = function () {
        "up" == this.Direction ? (parseInt(this.ScrollContent.scrollTop) >= parseInt(this.ScrollContent.scrollHeight) / 2 && (this.ScrollContent.scrollTop = 0), this.ScrollContent.scrollTop += this.Amount) : (parseInt(this.ScrollContent.scrollTop) <= 0 && (this.ScrollContent.scrollTop = parseInt(this.ScrollContent.scrollHeight) / 2), this.ScrollContent.scrollTop -= this.Amount), parseInt(this.ScrollContent.scrollTop) % this.LineHeight != 0 ? this.ScrollTimer = setTimeout(this.GetFunction(this, "AutoScroll"), this.Delay) : this.AutoScrollTimer = setTimeout(this.GetFunction(this, "AutoScroll"), this.Timeout)
    }, ScrollText.prototype.Scroll = function (e) {
        "up" == e ? (0 == this.ScrollContent.scrollTop && (this.ScrollContent.scrollTop = parseInt(this.ScrollContent.scrollHeight) / 2), this.ScrollContent.scrollTop -= this.Amount) : this.ScrollContent.scrollTop += this.Amount, parseInt(this.ScrollContent.scrollTop) >= parseInt(this.ScrollContent.scrollHeight) / 2 && (this.ScrollContent.scrollTop = 0), parseInt(this.ScrollContent.scrollTop) % this.LineHeight != 0 && (this.ScrollTimer = setTimeout(this.GetFunction(this, "Scroll", e), this.Delay))
    }, ScrollText.prototype.GetFunction = function (e, t, n) {
        return function () {
            e[t](n)
        }
    }
}, function (e, t, n) {
    "use strict";
    window.NewScrollText = function (e, t, n, o, a, i, r) {
        this.elementId = e, this.dsiplayId = t, this.lineHeight = n || 20, this.marqueeContent = new Array, this.marqueeInterval = new Array, this.marqueeId = 0, this.marqueeDelay = r || 3500, this.scrollLine = i || 2, this.marqueeHeight = this.scrollLine * this.lineHeight + (o || 0), this.endScrollTop = parseInt(1.5 * this.marqueeHeight), this.initScrollTop = a || 8
    }, NewScrollText.prototype.$ = function (e) {
        return document.getElementById(e)
    }, NewScrollText.prototype.initMarquee = function () {
        this.marqueeContent = $("#" + this.elementId).children();
        var e = $(this.marqueeContent[0]).html();
        if (this.marqueeContent.length > 1) {
            var t = '<div id="marqueeBox" style="overflow:hidden;height:' + this.marqueeHeight + 'px"><div>' + e + "</div></div>";
            this.$(this.dsiplayId).innerHTML = t, this.$(this.dsiplayId).onmouseover = this.GetFunction(this, "stop"), this.$(this.dsiplayId).onmouseout = this.GetFunction(this, "start")
        } else {
            t = '<div id="marqueeBox" style="overflow:hidden;height:' + this.marqueeHeight + 'px"><div>' + e + "</div></div>";
            this.$(this.dsiplayId).innerHTML = t
        }
        this.marqueeId++, this.marqueeContent.length > 1 && (this.marqueeInterval[0] = setInterval(this.GetFunction(this, "startMarquee"), this.marqueeDelay))
    }, NewScrollText.prototype.stop = function () {
        clearInterval(this.marqueeInterval[0])
    }, NewScrollText.prototype.start = function () {
        this.marqueeInterval[0] = setInterval(this.GetFunction(this, "startMarquee"), this.marqueeDelay)
    }, NewScrollText.prototype.startMarquee = function () {
        var e = $(this.marqueeContent[this.marqueeId]).html();
        if (this.marqueeId++, this.marqueeId >= this.marqueeContent.length && (this.marqueeId = 0), 1 == document.getElementById("marqueeBox").childNodes.length) {
            var t = document.createElement("DIV");
            t.innerHTML = e, document.getElementById("marqueeBox").appendChild(t)
        } else document.getElementById("marqueeBox").childNodes[0].innerHTML = e, document.getElementById("marqueeBox").appendChild(document.getElementById("marqueeBox").childNodes[0]);
        document.getElementById("marqueeBox").scrollTop = this.initScrollTop, clearInterval(this.marqueeInterval[1]), this.marqueeInterval[1] = setInterval(this.GetFunction(this, "scrollMarquee"), 20)
    }, NewScrollText.prototype.scrollMarquee = function () {
        document.getElementById("marqueeBox").scrollTop++, document.getElementById("marqueeBox").scrollTop == this.endScrollTop && clearInterval(this.marqueeInterval[1])
    }, NewScrollText.prototype.GetFunction = function (e, t, n) {
        return function () {
            e[t](n)
        }
    }
}, function (e, t, n) {
    "use strict";
    window.d_mpcountry = [{k: "086", v: "大陆"}, {k: "000", v: "其他"}], window.d_workyear = [{k: "1", v: "在读学生"}, {
        k: "2",
        v: "应届毕业生"
    }, {k: "3", v: "1年"}, {k: "4", v: "2年"}, {k: "5", v: "3-4年"}, {k: "6", v: "5-7年"}, {k: "7", v: "8-9年"}, {
        k: "8",
        v: "10年以上"
    }], window.d_jobstatus = [{k: "0", v: "目前正在找工作"}, {k: "3", v: "观望有好机会会考虑"}, {
        k: "4",
        v: "我目前不想换工作"
    }], window.d_currtype = [{k: "01", v: "人民币"}, {k: "02", v: "港币"}, {k: "03", v: "美元"}, {k: "04", v: "日元"}, {
        k: "05",
        v: "欧元"
    }, {k: "06", v: "其它"}], window.d_yearsal = [{k: "01", v: "2万以下"}, {k: "02", v: "2-3万"}, {
        k: "03",
        v: "3-4万"
    }, {k: "04", v: "4-5万"}, {k: "05", v: "5-6万"}, {k: "06", v: "6-8万"}, {k: "07", v: "8-10万"}, {
        k: "08",
        v: "10-15万"
    }, {k: "13", v: "15-20万"}, {k: "09", v: "20-30万"}, {k: "14", v: "30-40万"}, {k: "10", v: "40-50万"}, {
        k: "15",
        v: "50-60万"
    }, {k: "11", v: "60-80万"}, {k: "16", v: "80-100万"}, {k: "12", v: "100万以上"}], window.d_nationality = [{
        k: "001",
        v: "中国大陆"
    }, {k: "002", v: "中国香港"}, {k: "003", v: "中国澳门"}, {k: "004", v: "中国台湾"}, {k: "018", v: "非洲"}, {
        k: "012",
        v: "加拿大"
    }, {k: "013", v: "欧洲"}, {k: "011", v: "法国"}, {k: "009", v: "德国"}, {k: "006", v: "日本"}, {
        k: "007",
        v: "韩国"
    }, {k: "014", v: "北美"}, {k: "008", v: "新加坡"}, {k: "016", v: "东南亚"}, {k: "015", v: "南美"}, {
        k: "010",
        v: "英国"
    }, {k: "005", v: "美国"}, {k: "017", v: "西亚"}, {k: "019", v: "其他"}], window.d_card = [{k: "0", v: "身份证"}, {
        k: "1",
        v: "护照"
    }, {k: "2", v: "军人证"}, {k: "4", v: "香港身份证"}, {k: "3", v: "其它"}], window.d_marriage = [{k: "0", v: "未婚"}, {
        k: "1",
        v: "已婚"
    }, {k: "2", v: "保密"}], window.d_politics = [{k: "01", v: "中共党员"}, {k: "02", v: "共青团员"}, {
        k: "03",
        v: "民主党派人士"
    }, {k: "04", v: "无党派民主人士"}, {k: "05", v: "普通公民"}], window.d_othercontact_type = [{k: "00", v: "家庭电话"}, {
        k: "01",
        v: "公司电话"
    }, {k: "02", v: "微信"}, {k: "03", v: "QQ号"}], window.d_degree = [{k: "1", v: "初中及以下"}, {k: "2", v: "高中"}, {
        k: "3",
        v: "中技"
    }, {k: "4", v: "中专"}, {k: "5", v: "大专"}, {k: "6", v: "本科"}, {k: "7", v: "硕士"}, {k: "8", v: "博士"}, {
        k: "-1",
        v: "MBA"
    }], window.d_companysize = [{k: "1", v: "少于50人"}, {k: "2", v: "50-150人"}, {k: "3", v: "150-500人"}, {
        k: "4",
        v: "500-1000人"
    }, {k: "5", v: "1000-5000人"}, {k: "6", v: "5000-10000人"}, {k: "7", v: "10000人以上"}], window.d_cotype = [{
        k: "01",
        v: "外资（欧美）"
    }, {k: "02", v: "外资（非欧美）"}, {k: "03", v: "合资"}, {k: "05", v: "国企"}, {k: "06", v: "民营公司"}, {
        k: "13",
        v: "上市公司"
    }, {k: "14", v: "创业公司"}, {k: "07", v: "外企代表处"}, {k: "09", v: "政府机关"}, {k: "10", v: "事业单位"}, {
        k: "11",
        v: "非营利组织"
    }], window.d_saltype = [{k: "01", v: "1500以下"}, {k: "02", v: "1500-1999"}, {k: "03", v: "2000-2999"}, {
        k: "04",
        v: "3000-4499"
    }, {k: "05", v: "4500-5999"}, {k: "06", v: "6000-7999"}, {k: "07", v: "8000-9999"}, {
        k: "08",
        v: "10000-14999"
    }, {k: "09", v: "15000-19999"}, {k: "13", v: "20000-24999"}, {k: "10", v: "25000-29999"}, {
        k: "14",
        v: "30000-39999"
    }, {k: "11", v: "40000-49999"}, {k: "12", v: "50000-69999"}, {k: "15", v: "70000-99999"}, {
        k: "16",
        v: "100000及以上"
    }], window.d_entrytime = [{k: "1", v: "随时"}, {k: "2", v: "1周内"}, {k: "3", v: "1个月内"}, {k: "4", v: "3个月内"}, {
        k: "5",
        v: "待定"
    }], window.d_jobterm = [{k: "0", v: "全职"}, {k: "1", v: "兼职"}, {k: "2", v: "实习"}, {
        k: "3",
        v: "全/兼职"
    }], window.d_forlang = [{k: "01", v: "英语"}, {k: "02", v: "日语"}, {k: "05", v: "俄语"}, {k: "08", v: "阿拉伯语"}, {
        k: "03",
        v: "法语"
    }, {k: "04", v: "德语"}, {k: "06", v: "西班牙语"}, {k: "11", v: "葡萄牙语"}, {k: "12", v: "意大利语"}, {
        k: "07",
        v: "韩语/朝鲜语"
    }, {k: "10", v: "普通话"}, {k: "13", v: "粤语"}, {k: "14", v: "闽南语"}, {k: "15", v: "上海话"}, {
        k: "09",
        v: "其它"
    }], window.d_flevel = [{k: "1", v: "一般"}, {k: "2", v: "良好"}, {k: "3", v: "熟练"}, {
        k: "4",
        v: "精通"
    }], window.d_ability = [{k: "0", v: "不限"}, {k: "1", v: "一般"}, {k: "2", v: "良好"}, {k: "3", v: "熟练"}, {
        k: "4",
        v: "精通"
    }], window.d_enlevel = [{k: "0", v: "未参加"}, {k: "1", v: "未通过"}, {k: "2", v: "英语四级"}, {k: "3", v: "英语六级"}, {
        k: "4",
        v: "专业四级"
    }, {k: "5", v: "专业八级"}], window.d_jplevel = [{k: "0", v: "无"}, {k: "1", v: "一级"}, {k: "2", v: "二级"}, {
        k: "3",
        v: "三级"
    }, {k: "4", v: "四级"}], window.d_otherlist = [{k: "01", v: "兴趣爱好"}, {k: "02", v: "特长"}, {
        k: "03",
        v: "职业目标"
    }, {k: "04", v: "特殊技能"}, {k: "05", v: "社会活动"}, {k: "06", v: "荣誉"}, {k: "07", v: "宗教信仰"}, {
        k: "08",
        v: "推荐信"
    }], window.d_oscountry = [{k: "01", v: "美国"}, {k: "02", v: "英国"}, {k: "03", v: "加拿大"}, {
        k: "04",
        v: "澳大利亚"
    }, {k: "05", v: "法国"}, {k: "06", v: "新加坡"}, {k: "07", v: "新西兰"}, {k: "08", v: "德国"}, {k: "09", v: "韩国"}, {
        k: "10",
        v: "俄罗斯"
    }, {k: "11", v: "日本"}, {k: "12", v: "意大利"}, {k: "13", v: "爱尔兰"}, {k: "14", v: "荷兰"}, {k: "15", v: "马来西亚"}, {
        k: "16",
        v: "瑞士"
    }, {k: "17", v: "泰国"}, {k: "18", v: "乌克兰"}, {k: "19", v: "南非"}, {k: "20", v: "芬兰"}, {k: "21", v: "瑞典"}, {
        k: "22",
        v: "奥地利"
    }, {k: "23", v: "西班牙"}, {k: "24", v: "比利时"}, {k: "25", v: "挪威"}, {k: "26", v: "丹麦"}, {k: "27", v: "菲律宾"}, {
        k: "28",
        v: "波兰"
    }, {k: "29", v: "印度"}, {k: "30", v: "阿根廷"}, {k: "31", v: "巴西"}, {k: "32", v: "白俄罗斯"}, {
        k: "33",
        v: "哥伦比亚"
    }, {k: "34", v: "古巴"}, {k: "35", v: "埃及"}, {k: "36", v: "希腊"}, {k: "37", v: "匈牙利"}, {k: "38", v: "印度尼西亚"}, {
        k: "39",
        v: "伊朗"
    }, {k: "40", v: "蒙古"}, {k: "41", v: "墨西哥"}, {k: "42", v: "葡萄牙"}, {k: "43", v: "沙特阿拉伯"}, {
        k: "44",
        v: "土耳其"
    }, {k: "45", v: "科威特"}, {k: "46", v: "巴基斯坦"}, {k: "47", v: "坦桑尼亚"}, {k: "48", v: "保加利亚"}, {
        k: "49",
        v: "以色列"
    }, {k: "50", v: "越南"}, {k: "51", v: "乌干达"}, {k: "52", v: "冰岛"}, {k: "53", v: "安哥拉"}, {
        k: "54",
        v: "阿尔及利亚"
    }, {k: "55", v: "塞浦路斯"}, {k: "56", v: "阿联酋"}, {k: "57", v: "加纳"}, {k: "58", v: "塞内加尔"}, {
        k: "59",
        v: "捷克"
    }, {k: "60", v: "尼日利亚"}, {k: "99", v: "其他"}], window.d_openness = [{k: "0", v: "对所有公开"}, {
        k: "2",
        v: "对无忧公开"
    }, {k: "3", v: "完全保密"}], window.d_itability = [{k: "2", v: "一般"}, {k: "3", v: "良好"}, {k: "1", v: "熟练"}, {
        k: "0",
        v: "精通"
    }], window.d_salary_type = [{k: "4", v: "年薪"}, {k: "1", v: "月薪"}, {k: "3", v: "日薪"}, {k: "2", v: "时薪"}]
}, function (e, t, n) {
    "use strict";
    window.trackPoints = {
        searchTrackButtonClick: {
            trackType: "1",
            elementsStr: "[track-type='searchTrackButtonClick']",
            paramsRank: ["logCode", "webId", "version", "logTime", "ip", "guid", "domain", "pageCode", "eventType", "traceName", "cusParam"],
            params: {logCode: "81", webId: "2", version: "1", domain: "search.51job.com", traceName: ""},
            dealParamsBeforeEvent: function (e) {
                return e.pageCode = $("#pageCode").val(), e.logTime = (new Date).getTime() + d_system_client_time, e.ip = trackConfig.ip, e.guid = trackConfig.guid, e.cusParam = ["1", trackConfig.accountid].join(String.fromCharCode(22)), e
            },
            dealParamsAfterEvent: function (e, t) {
                return e.eventType = $(t).attr("event-type"), e
            }
        },
        searchConditionTrackButtonClick: {
            trackType: "1",
            elementsStr: "[track-type='searchConditionTrackButtonClick']",
            paramsRank: ["logCode", "webId", "version", "logTime", "ip", "guid", "domain", "pageCode", "eventType", "traceName", "cusParam"],
            params: {logCode: "81", webId: "2", version: "1", domain: "search.51job.com", traceName: ""},
            dealParamsBeforeEvent: function (e) {
                return e.pageCode = $("#pageCode").val(), e.logTime = (new Date).getTime() + d_system_client_time, e.ip = trackConfig.ip, e.guid = trackConfig.guid, e
            },
            dealParamsAfterEvent: function (e, t) {
                return e.eventType = $(t).attr("event-type"), e.cusParam = ["1", trackConfig.accountid, $(t).text()].join(String.fromCharCode(22)), e
            }
        },
        adTrackButtonClick: {
            trackType: "1",
            elementsStr: "[track-type='adTrackButtonClick']",
            paramsRank: ["logCode", "webId", "version", "logTime", "ip", "guid", "domain", "pageCode", "eventType", "traceName", "cusParam"],
            params: {logCode: "81", webId: "2", version: "1", domain: "search.51job.com", traceName: ""},
            dealParamsBeforeEvent: function (e) {
                return e.pageCode = $("#pageCode").val(), e.logTime = (new Date).getTime() + d_system_client_time, e.ip = trackConfig.ip, e.guid = trackConfig.guid, e.cusParam = ["1", trackConfig.accountid, $("#kwdselectid").val(), $("#jobarea").val(), $("#coad_companyid").val()].join(String.fromCharCode(22)), e
            },
            dealParamsAfterEvent: function (e, t) {
                return e.eventType = $(t).attr("event-type"), e
            }
        },
        adShowManualTrack: {
            trackType: "3",
            elementsStr: "",
            paramsRank: ["logCode", "webId", "version", "logTime", "ip", "guid", "domain", "pageCode", "eventType", "traceName", "cusParam"],
            params: {
                logCode: "81",
                webId: "2",
                version: "1",
                domain: "search.51job.com",
                pageCode: "10101",
                traceName: "",
                eventType: "4"
            },
            dealParamsBeforeEvent: function (e) {
                return e.logTime = (new Date).getTime() + d_system_client_time, e.ip = trackConfig.ip, e.guid = trackConfig.guid, e
            }
        },
        reBindTrackbuttonClick: {
            trackType: "4",
            elementsStr: "[track-type='reBindTrackButtonClick']",
            paramsRank: ["logCode", "webId", "version", "logTime", "ip", "guid", "domain", "pageCode", "eventType", "traceName", "cusParam"],
            params: {logCode: "81", webId: "2", version: "1", domain: "search.51job.com", traceName: ""},
            dealParamsBeforeEvent: function (e) {
                return e.ip = trackConfig.ip, e.guid = trackConfig.guid, e.pageCode = $("#pageCode").val(), e.cusParam = "1" + String.fromCharCode(22) + trackConfig.accountid, e
            },
            dealParamsAfterEvent: function (e, t) {
                return e.eventType = $(t).attr("event-type"), e.logTime = (new Date).getTime() + d_system_client_time, e
            }
        },
        manualTrackbuttonClick: {
            trackType: "4",
            elementsStr: "",
            paramsRank: ["logCode", "webId", "version", "logTime", "ip", "guid", "domain", "pageCode", "eventType", "traceName", "cusParam"],
            params: {logCode: "81", webId: "2", version: "1", domain: "search.51job.com", traceName: ""},
            dealParamsBeforeEvent: function (e) {
                return e.ip = trackConfig.ip, e.guid = trackConfig.guid, e.pageCode = $("#pageCode").val(), e.cusParam = "1" + String.fromCharCode(22) + trackConfig.accountid, e.logTime = (new Date).getTime() + d_system_client_time, e
            }
        }
    }
}], [17]);