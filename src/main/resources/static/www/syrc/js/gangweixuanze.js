// JavaScript Document

!function(e) {
	var t = window.webpackJsonp;
	window.webpackJsonp = function(a, o, r) {
		for (var c, s, d, l = 0, _ = []; l < a.length; l++) s = a[l], n[s] && _.push(n[s][0]), n[s] = 0;
		for (c in o) Object.prototype.hasOwnProperty.call(o, c) && (e[c] = o[c]);
		for (t && t(a, o, r); _.length;) _.shift()();
		if (r)
			for (l = 0; l < r.length; l++) d = i(i.s = r[l]);
		return d
	};
	var a = {},
		n = {
			2 : 0
		};
	function i(t) {
		if (a[t]) return a[t].exports;
		var n = a[t] = {
			i : t,
			l : !1,
			exports : {}
		};
		return e[t].call(n.exports, n, n.exports, i), n.l = !0, n.exports
	}
	i.m = e, i.c = a, i.d = function(e, t, a) {
		i.o(e, t) || Object.defineProperty(e, t, {
			configurable : !1,
			enumerable : !0,
			get : a
		})
	}, i.n = function(e) {
		var t = e && e.__esModule ? function() {
			return e["default"]
		} : function() {
			return e
		};
		return i.d(t, "a", t), t
	}, i.o = function(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, i.p = "//js.51jobcdn.com", i.oe = function(e) {
		throw console.error(e), e
	}
}([, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t, a) {
	"use strict";window.kwdSearchData = [], window.kwdSearch = function(e) {
		var t = "https://kwdsrv.51job.com/KwdSrvByKey/default.aspx?",
			a = $("#keywordtype").val(),
			n = new Array("Job", "51jobcompany", "51joball"),
			i = encodeURIComponent($("#" + e).val());
		t = t + "src=" + n[a] + "&kwd=" + i + "&callback=?";
		var o = i + "_" + a;
		if ("undefined" != typeof kwdSearchData[o]) $("#" + e).attr("preval", i), kwdSearchShow(kwdSearchData[o], e);else {
			if ("" == i) return void ("kwdselectid" == e ? ($("#searchHistory").show().parents(".c,.box,.top_wrap,.wrap,.cup").css("z-index", "4"), $("#KwdSearchResult").hide()) : ($("#searchHistory1").show().parents(".c,.box,.top_wrap,.wrap,.cup").css("z-index", "4"), $("#KwdSearchResult1").hide()));
			$.getJSON(t, function(t) {
				"1" == t.message && ("" != t.content ? kwdSearchData[o] = unescape(t.content).split("\t") : kwdSearchData[o] = ""), $("#" + e).attr("preval", i), kwdSearchShow(kwdSearchData[o], e)
			})
		}
	}, window.kwdSearchShow = function(e, t) {
		var a = $("#language").length > 0 ? $("#language").val() : "c";
		if (0 != e.length) {
			var n = '<span class="tl off"><span class="bg b_key">' + ("e" == a ? "Keywords" : "相关关键字") + "</span></span>",
				i = new RegExp("'", "g");
			$.each(e, function(e, t) {
				n += '<span class="li" onclick="kwdGoSearch(\'' + t.replace(i, "\\'") + "');\" >" + t + "</span>"
			}), "kwdselectid" == t ? ($("#KwdSearchResult").html(n), $("#KwdSearchResult").show().parents(".c,.box,.top_wrap,.wrap,.cup").css("z-index", "4")) : ($("#KwdSearchResult1").html(n), $("#KwdSearchResult1").show().parents(".c,.box,.top_wrap,.wrap,.cup").css("z-index", "4"))
		} else $("#" + t).attr("preval") == $("#" + t).val() && $("#KwdSearchResult, #KwdSearchResult1").hide()
	}, window.kwdSearchOperate = function(e) {
		var t = arguments[1] ? $(arguments[1]) : $("#kwdselectid"),
			a = arguments[2] ? $(arguments[2]) : $("#KwdSearchResult"),
			n = a.find("span.li"),
			i = n.length - 1,
			o = parseInt(t.attr("vindex")),
			r = e.keyCode,
			c = "",
			s = 38 == r,
			d = 40 == r,
			l = 39 == r;
		if (s || d) -1 == o ? s ? (o = i, a.scrollTop(30 * n.length)) : d && (o = 0, a.scrollTop(0)) : d ? o == i ? (o = 0, a.scrollTop(0)) : (o++, $(n[o]).position().top > 180 && a.scrollTop(a.scrollTop() + 27)) : s && (0 == o ? (o = i, a.scrollTop(30 * n.length)) : (o--, $(n[o]).position().top < 0 && a.scrollTop(a.scrollTop() - 27))), n.removeClass("on"), $(n[o]).addClass("on"), c = $(n[o]).html(), t.val(c), a.show().parents(".c,.box,.top_wrap,.wrap,.cup").css("z-index", "4"), t.attr("vindex", o);
		else if (l) {
			if (-1 == o) return;
			kwdSearch(t.attr("id"))
		}
	}, window.kwdGoSearch = function(e) {
		var t = "00",
			a = "0000",
			n = "000000",
			i = "2",
			o = "99",
			r = "99",
			c = "99",
			s = "99",
			d = "99",
			l = "99",
			_ = "0000";
		if (1 == $("#indtype_code").length && "" != $("#indtype_code").val() && (t = $("#indtype_code").val()), 1 == $("#funtype_code").length && "" != $("#funtype_code").val() && (a = $("#funtype_code").val()), 1 == $("#jobarea").length && "" != $("#jobarea").val() && (n = $("#jobarea").val()), 1 == $("#keywordtype").length && "" != $("#keywordtype").val() && (i = $("#keywordtype").val()), "" == e && (e = " "), "/jobsearch/advance_search.php" == window.location.pathname && (1 == $("#cottype").length && "" != $("#cottype").val() && (r = $("#cottype").val()), 1 == $("#workyear").length && "" != $("#workyear").val() && (o = $("#workyear").val()), 1 == $("#providesalary").length && "" != $("#providesalary").val() && (l = $("#providesalary").val()), 1 == $("#companysize").length && "" != $("#companysize").val() && (d = $("#companysize").val()), 1 == $("#degreefrom").length && "" != $("#degreefrom").val() && (c = $("#degreefrom").val()), 1 == $("#jobterm").length && "" != $("#jobterm").val() && (s = $("#jobterm").val())), "/default-xs.php" == window.location.pathname && (_ = "0100"), $("#includeAround").length > 0 && $("#includeAround").is(":checked")) {
			var u = n.split(",");
			if (firstArea = u[0], "040000" == firstArea) -1 == $.inArray("030800", u) && -1 == $.inArray("030000", u) && u.push("030800"), n = u.join(",");else {
				var p = new Array;
				6 == firstArea.length ? checkitem = firstArea.substr(0, 2) + "0000" : "01" == firstArea ? checkitem = "030000" : checkitem = "000000", p.push(checkitem), $.each(u, function(e, t) {
					6 == t.length && t.substr(0, 2) + "0000" == checkitem || p.push(t)
				}), n = p.join(",")
			}
		}
		if ("undefined" != typeof manualTrack && "undefined" != typeof window.cfg && ("default.php" == window.cfg.fileName || "default-e.php" == window.cfg.fileName)) {
			var y = {
				cusParam : "1" + String.fromCharCode(22) + i + String.fromCharCode(22) + $.trim(e) + String.fromCharCode(22) + ("000000" == n ? "" : n)
			};
			manualTrack("searchOfHome", y)
		}
		var f = window.cfg.domain.search + "/list/" + encodeURIComponent(encodeURIComponent(n)) + ",000000," + encodeURIComponent(encodeURIComponent(a)) + "," + encodeURIComponent(encodeURIComponent(t)) + ",9,99," + encodeURIComponent(encodeURIComponent(e)) + "," + encodeURIComponent(encodeURIComponent(i)) + ",1.html?lang=c&stype=&postchannel=" + _ + "&workyear=" + o + "&cotype=" + r + "&degreefrom=" + c + "&jobterm=" + s + "&companysize=" + d + "&providesalary=" + l + "&lonlat=0%2C0&radius=-1&ord_field=0&confirmdate=9&fromType=&dibiaoid=0&address=&line=&specialarea=00&from=&welfare=";
		window.location = f
	}, window.kwdtypeChangeResult = function(e) {
		var t = $("#language").length > 0 ? $("#language").val() : "c",
			a = {
				1 : "e" == t ? "Company" : "公司",
				2 : "e" == t ? "Full Text" : "全文"
			},
			n = {
				1 : "e" == t ? "Search Company" : "搜公司",
				2 : "e" == t ? "Search Full Text" : "搜全文"
			},
			i = {
				1 : "e" == t ? "Search Company" : "搜索公司名",
				2 : "e" == t ? "Search Full Text/Job" : "搜索全文/职位名"
			};
		$("#kwdTypeSelUl").html(""), $("#kwdTypeSelUl1").html(""), $("#keywordtype").val(e), $("#kwdselectid").attr("placeholder", i[e]), $("#kwdTypeSelUl").html("<li>" + a[e]), $("#kwdTypeSelUl1").html("<li>" + a[e]), $("#kwdTypeSelUl").click(function(e) {
			e.stopPropagation()
		}), $("#kwdTypeSelUl1").click(function(e) {
			e.stopPropagation()
		});
		var o = "";
		for (var r in a) e != r && (o = '<li><a href="javascript:void(0);" onclick="kwdtypeChangeResult(' + r + ');">' + n[r] + "</a></li>", $("#kwdTypeSelUl").append(o), $("#kwdTypeSelUl1").append(o));
		$("#kwdTypeSelUl").removeClass("on"), $("#kwdTypeSelUl1").removeClass("on")
	}, window.kwdtypeChangeResult_jobs = function(e) {
		var t = $("#language").length > 0 ? $("#language").val() : "c",
			a = {
				1 : "e" == t ? "Company" : "公司",
				2 : "e" == t ? "Full Text" : "全文"
			},
			n = {
				1 : "e" == t ? "Search Company" : "搜公司",
				2 : "e" == t ? "Search Full Text" : "搜全文"
			},
			i = {
				1 : "e" == t ? "Search Company" : "搜索公司名",
				2 : "e" == t ? "Search Full Text/Job" : "搜索全文/职位名"
			};
		$("#kwdTypeSelUl_jobs").html(""), $("#kwdTypeSelUl1").html(""), $("#keywordtype").val(e), $("#kwdselectid").attr("placeholder", i[e]), $("#kwdTypeSelUl_jobs").html("<li>" + a[e]), $("#kwdTypeSelUl1").html("<li>" + a[e]), $("#kwdTypeSelUl_jobs").click(function(e) {
			e.stopPropagation()
		}), $("#kwdTypeSelUl1").click(function(e) {
			e.stopPropagation()
		});
		var o = "";
		for (var r in a) e != r && (o = '<li><a href="javascript:void(0);" onclick="kwdtypeChangeResult_jobs(' + r + ');">' + n[r] + '<em class="dicon"></em></a></li>', $("#kwdTypeSelUl_jobs").append(o), $("#kwdTypeSelUl1").append(o));
		$("#kwdTypeSelUl_jobs").removeClass("on"), $("#kwdTypeSelUl1").removeClass("on")
	}, window.hidearr = function() {
		var e = {
			keywordtype : $("#keywordtype"),
			history : $("#searchHistory"),
			history1 : $("#searchHistory1"),
			kwdresult : $("#KwdSearchResult"),
			kwdresult1 : $("#KwdSearchResult1")
		};
		$.each(e, function(e, t) {
			t.hide()
		})
	}, window.closeAllFloatDiv = function() {
		var e = arguments[0] ? arguments[0] : "",
			t = arguments[1] ? arguments[1] : "",
			a = arguments[2] ? arguments[2] : "";
		$("div[float-on='true']").not(e).each(function() {
			$(this).removeClass("on"), $(this).attr("float-on", "false"), $(this).removeClass("focusinput");
			var e = $(this).children("input");
			"selectionlist" == e.attr("input-type") && "" != e.attr("placeholder") && "" == e.val() && e.val(e.attr("placeholder")).addClass("placeholder")
		}), $("div[float-on='false']").not(e).each(function() {
			$(this).removeClass("focusinput")
		}), $("div[float-index='true']").not(t).each(function() {
			$(this).css("z-index", "0"), $(this).attr("float-index", "false")
		}), $("div[layer_float_on='true']").each(function() {
			$(this).css("display", "none"), $(this).attr("layer_float_on", "false")
		}), $("input[pre_value='']").not(a).each(function() {
			$(this).hasClass("placeholder") || $(this).val("")
		}), $("input[pre_code='']").val(""), $(".flboxwp,.ln,.c,.box").css("z-index", ""), $(".hpBox").removeClass("on").parents(".c,.box,.top_wrap,.wrap,.cup").css("z-index", "")
	}, $("html").click(function() {
		closeAllFloatDiv(null, null)
	}), $(document).ready(function() {
		var e = {
				keywordtype : $("#keywordtype"),
				history : $("#searchHistory"),
				history1 : $("#searchHistory1"),
				kwdresult : $("#KwdSearchResult"),
				kwdresult1 : $("#KwdSearchResult1")
			},
			t = $("#keywordtype").val(),
			a = $("#language").length > 0 ? $("#language").val() : "c";
		switch (t) {
		case "1":
			$("#kwdType").html("e" == a ? "Company" : "公司"), kwdtypeChangeResult(1);
			break;case "2":
		default:
			$("#kwdType").html("e" == a ? "Full Text" : "全文"), kwdtypeChangeResult(2)
		}
		$("#kwdTypeSelUl_jobs").hover(function(e) {
			$("#kwdTypeSelUl_jobs").addClass("on")
		}, function(e) {
			$("#kwdTypeSelUl_jobs").removeClass("on")
		}), $("#kwdselectid, #kwdselectid1").keyup(function(e) {
			var t = "kwdselectid1" == $(this).attr("id") ? $("#searchHistory1") : $("#searchHistory");
			38 != e.keyCode && 39 != e.keyCode && 40 != e.keyCode && (t.hide(), kwdSearch($(this).attr("id")), $(this).attr("vindex", "-1"))
		}), $("#kwdselectid, #kwdselectid1").keydown(function(e) {
			var t = "kwdselectid1" == $(this).attr("id") ? $("#KwdSearchResult1") : $("#KwdSearchResult");
			if (13 == e.keyCode) {
				var a = parseInt($(this).attr("vindex"));
				return -1 == a ? void kwdGoSearch($(this).val()) : void kwdGoSearch($(t.find("span.li")[a]).html())
			}
			if (38 == e.keyCode || 39 == e.keyCode || 40 == e.keyCode) {
				var n = window.event || arguments[0].originalEvent || e;
				(n.srcElement || n.target).id == $(this).attr("id") && "" != t.html() && "" != $(this).val() && kwdSearchOperate(e, $(this), t)
			}
		}), $("#work_position_click").areaLayer({
			id : "work_position_click",
			code_id : "jobarea",
			layer_id : "work_position_layer",
			text_id : "work_position_input",
			data_multiple : !0,
			special_type : "2",
			save_type : "1",
			data_map : {},
			show_ip_location : !0,
			layer_after_close : function() {
				"" == $("#work_position_input").val() && $("#work_position_input").val("e" == a ? "Location" : "全国"), $("#work_position_input1").length > 0 && $("#work_position_input1").val($("#work_position_input").val()), $("#work_position_span").text($("#work_position_input").val())
			},
			language : a
		}), "undefined" == typeof window.cfg || "default.php" != window.cfg.fileName && "default-e.php" != window.cfg.fileName || $("#work_position_click1").areaLayer({
			id : "work_position_click1",
			code_id : "jobarea",
			layer_id : "work_position_layer1",
			text_id : "work_position_input1",
			data_multiple : !0,
			special_type : "2",
			save_type : "1",
			data_map : {},
			show_ip_location : !0,
			layer_after_close : function() {
				"" == $("#work_position_input1").val() && $("#work_position_input1").val("e" == a ? "Location" : "工作地点"), $("#work_position_input").val($("#work_position_input1").val())
			},
			language : a
		}), "undefined" != typeof onlySetJobareaLayer && 0 != onlySetJobareaLayer || "undefined" != typeof window.cfg && ("default.php" == window.cfg.fileName || "default-e.php" == window.cfg.fileName) || ($("#funtype_click").funtypeLayer({
			id : "funtype_click",
			code_id : "funtype_code",
			layer_id : "funtype_layer",
			text_id : "funtype_input",
			save_type : "1",
			data_multiple : !0,
			language : a
		}), $("#indtype_click").indtypeLayer({
			id : "indtype_click",
			code_id : "indtype_code",
			layer_id : "indtype_layer",
			text_id : "indtype_input",
			save_type : "1",
			data_multiple : !0,
			language : a
		}), "undefined" != typeof window.cfg && "advance_search.php" == window.cfg.fileName && ($("#funtype_input").funtypeAssociation({
			id : "funtype_input",
			text_id : "funtype_input",
			code_id : "funtype_code",
			association_id : "funtype_list",
			float_on_id : "funtype_div",
			data_length : "1",
			data_parent_click : !0,
			save_type : "1",
			data_multiple : !0,
			language : a
		}), $("#indtype_input").indtypeAssociation({
			id : "indtype_input",
			text_id : "indtype_input",
			code_id : "indtype_code",
			association_id : "indtype_list",
			float_on_id : "indtype_div",
			save_type : "1",
			data_multiple : !0,
			language : a
		}))), "undefined" != typeof window.cfg && "advance_search.php" == window.cfg.fileName && ("1" == $("#islogin").val() && $.ajax({
			type : "get",
			url : window.cfg.root_userset_ajax + "/searcher.php",
			data : {
				type : "fromadvancesearch"
			},
			async : !0,
			contentType : "application/x-www-form-urlencoded; charset=gbk",
			dataType : "jsonp",
			jsonp : "jsoncallback",
			success : function(e) {
				var t = "";
				if (e.rowcount > 0)
					for (var a = 0; a < e.rowcount; a++) t += '<div class="inf i2">', t += "<label onclick=\"window.location.href='" + window.cfg.url.i + "/userset/my_searcher.php?lang=c&searchid=" + e[a].searcherid + '\'" title="' + e[a].searchername + '">' + e[a].searchername + "</label>", t += '<a href="' + e[a].searcherurl + '" class="a" title="' + e[a].searcherinfostr + '" target="_blank">' + e[a].searcherinfostr + "</a>", t += "</div>";
				else
					t = '<div class="rno c_666">您还没有个人搜索器<span class="p_but flesh" onclick="window.location.href=\'' + window.cfg.url.i + "/userset/my_searcher.php?lang=c'\">立即创建</span></div>";
				$("#searcherbox").append(t)
			}
		}), $("#cottype_list").selectionlist({
			id : "cottype_list",
			hidden_id : "cottype",
			data : d_search_cottype
		}), $("#workyear_list").selectionlist({
			id : "workyear_list",
			hidden_id : "workyear",
			data : d_search_workyear
		}), $("#providesalary_list").selectionlist({
			id : "providesalary_list",
			hidden_id : "providesalary",
			data : d_search_providesalary
		}), $("#companysize_list").selectionlist({
			id : "companysize_list",
			hidden_id : "companysize",
			data : d_search_companysize
		}), $("#degreefrom_list").selectionlist({
			id : "degreefrom_list",
			hidden_id : "degreefrom",
			data : d_search_degreefrom
		}), $("#jobterm_list").selectionlist({
			id : "jobterm_list",
			hidden_id : "jobterm",
			data : d_search_jobterm
		})), $(document).click(function(t) {
			var a = window.event || arguments[0].originalEvent || t,
				n = a.srcElement || a.target;
			$.each(e, function(e, t) {
				t.hide()
			}), "kwdselectid" == n.id && "" == $("#kwdselectid").val() ? $("#searchHistory").show().parents(".c,.box,.top_wrap,.wrap,.cup").css("z-index", "4") : "kwdselectid" == n.id && "" != $("#kwdselectid").val() ? (kwdSearch("kwdselectid"), document.getElementById("kwdselectid").setAttribute("vindex", "-1"), $("#KwdSearchResult").children().length > 0 && $("#KwdSearchResult").show().parents(".c,.box,.top_wrap,.wrap,.cup").css("z-index", "4")) : "kwdselectid1" == n.id && "" == $("#kwdselectid1").val() ? $("#searchHistory1").show().parents(".c,.box,.top_wrap,.wrap,.cup").css("z-index", "4") : "kwdselectid1" == n.id && "" != $("#kwdselectid1").val() && (kwdSearch("kwdselectid1"), document.getElementById("kwdselectid1").setAttribute("vindex", "-1"), $("#KwdSearchResult1").children().length > 0 && $("#KwdSearchResult1").show().parents(".c,.box,.top_wrap,.wrap,.cup").css("z-index", "4"))
		}), $("#searchHistory").hide(), $("#KwdSearchResult").hide(), $("#searchHistory1").hide(), $("#KwdSearchResult1").hide(), $("#rdobox").click(function() {
			$("em[name='rdo']").hasClass("on") ? ($("em[name='rdo']").removeClass("on"), $("em[name='rdo']").addClass("off"), $("#includeAround").attr("checked", !1)) : ($("em[name='rdo']").removeClass("off"), $("em[name='rdo']").addClass("on"), $("#includeAround").attr("checked", !0))
		})
	})
}, function(e, t, a) {
	"use strict";$.extend({
		FLayer : {
			init : function(e) {
				var t = {
					layer_id : "layer_id",
					layer_class_name : "layer_class",
					layer_type : "1",
					layer_z_index : 1e3,
					layer_append_type : "1",
					layer_close_class : "layer_close",
					layer_bind_id : "layer_bind_id",
					oBindElement : "",
					layer_offset : 2,
					layer_before_open : "",
					layer_after_open : "",
					layer_after_close : "",
					layer_back_drop_id : "layer_back_drop",
					layer_back_drop_class : "layer_back_drop_class",
					layer_back_drop_z_index : 999,
					layer_init : !0
				};
				switch ($.extend(t, e), t.layer_type) {
				case "2":
					if ("" === t.oBindElement && (t.oBindElement = $("#" + t.layer_bind_id)), 0 == $("#" + t.layer_id).length) switch (t.layer_append_type) {
						case "1":
							t.oLayerElement = $("<div />").attr({
								id : t.layer_id,
								"class" : t.layer_class_name
							}).appendTo(t.oBindElement);
							break;case "2":
							t.oLayerElement = $("<div />").insertAttr({
								id : t.layer_id,
								"class" : t.layer_class_name
							}).insertAfter(t.oBindElement)
					}
					else $("#" + t.layer_id).attr({
							"class" : t.layer_class_name
						}), t.oLayerElement = $("#" + t.layer_id);
					break;default:
					0 == $("#" + t.layer_id).length ? t.oLayerElement = $("<div />").attr({
						id : t.layer_id,
						"class" : t.layer_class_name,
						init : "true"
					}).css({
						display : "none",
						position : "absolute",
						"z-index" : t.layer_z_index
					}).appendTo("body") : t.oLayerElement = $("#" + t.layer_id), 0 == $("#" + t.layer_back_drop_id).length ? t.oBackDropElement = $("<div />").attr({
						id : t.layer_back_drop_id,
						"class" : t.layer_back_drop_class
					}).css({
						"z-index" : t.layer_back_drop_z_index,
						position : "absolute",
						width : $(document).width() + "px",
						height : $(document).height() + "px",
						left : 0,
						top : 0
					}).appendTo("body") : ($("#" + t.layer_back_drop_id).css({
						height : $(document).height() + "px"
					}), t.oBackDropElement = $("#" + t.layer_back_drop_id)), t.oBindElement = {}
				}
				return t
			},
			setContent : function(e, t) {
				e.oLayerElement.html(t)
			},
			open : function(e) {
				var t = {};
				switch ((t = "undefined" != typeof e.oLayerSettings ? e.oLayerSettings : e).layer_type) {
				case "2":
					t.oLayerElement.is(":hidden") && ("function" == typeof t.layer_before_open && t.layer_before_open(e), jQuery.FLayer.setPosition(t)), t.oLayerElement.find("." + t.layer_close_class).bind("click", e, jQuery.FLayer.closeEvent), t.oLayerElement.show();
					break;default:
					t.layer_init ? ("function" == typeof t.layer_before_open && t.layer_before_open(e), jQuery.FLayer.setPosition(t)) : (t.oLayerElement.is(":hidden") && "true" == t.oLayerElement.attr("init") && ("function" == typeof t.layer_before_open && t.layer_before_open(e), jQuery.FLayer.setPosition(t)), t.oLayerElement.attr("init", "false")), t.oLayerElement.find("." + t.layer_close_class).bind("click", e, jQuery.FLayer.closeEvent), t.oLayerElement.show(), t.oBackDropElement.show()
				}
				"function" == typeof t.layer_after_open && t.layer_after_open(e)
			},
			closeEvent : function(e) {
				e.stopPropagation();
				var t = e.data;
				return jQuery.FLayer.close(t), !1
			},
			close : function(e) {
				var t = {};
				switch ((t = "undefined" != typeof e.oLayerSettings ? e.oLayerSettings : e).oLayerElement.hide(), e.layer_type) {
				case "1":
					t.oBackDropElement.hide()
				}
				"function" == typeof t.layer_after_close && t.layer_after_close(e)
			},
			setPosition : function(e) {
				switch (e.layer_type) {
				case "1":
					jQuery.FLayer.setCenter(e);
					break;case "2":
					jQuery.FLayer.setBottom(e)
				}
			},
			setCenter : function(e) {
				var t = $(document).scrollLeft(),
					a = $(document).scrollTop(),
					n = $(window).width(),
					i = $(window).height(),
					o = (n - e.oLayerElement.width()) / 2 + t,
					r = 382 * (i - e.oLayerElement.height()) / 1e3 + a;
				e.oLayerElement.css({
					left : Math.max(parseInt(o), t),
					top : Math.max(parseInt(r), a)
				})
			},
			setBottom : function(e) {}
		}
	})
}, function(e, t, a) {
	"use strict";$.extend({
		commonLayer : {
			init : function(e) {
				$.each([ "init", "top", "top_message", "multiple", "multiple_selected", "multiple_selected_each", "multiple_error", "center", "center_left", "center_left_each", "center_right", "center_right_list", "center_right_list_category", "center_right_list_sub_category", "center_right_list_sub_category_each", "center_right_list_sub_category_each_all", "center_right_list_sub_category_each_unit", "bottom", "bottom_save", "close", "under_each" ], function(t, a) {
					e[a] = e.id + "_" + a
				});
				var t = {
					data_init : jQuery.commonLayer.getInitContent,
					layer_before_open : jQuery.commonLayer.beforeOpen,
					layer_after_open : jQuery.commonLayer.afterOpen,
					data_click : jQuery.commonLayer.chooseEvent,
					getTopContent : jQuery.commonLayer.getTopContent,
					getTopMessageContent : jQuery.commonLayer.getTopMessageContent,
					getTopMultipleContent : jQuery.commonLayer.getTopMultipleContent,
					getCenterContent : jQuery.commonLayer.getCenterContent,
					getCenterLeftContent : jQuery.commonLayer.getCenterLeftContent,
					getCenterRightContent : jQuery.commonLayer.getCenterRightContent,
					getCenterRightCenterContent : jQuery.commonLayer.getCenterRightCenterContent,
					getBottomContent : jQuery.commonLayer.getBottomContent,
					getSubContent : jQuery.commonLayer.getSubContent
				};
				return $.each(t, function(t, a) {
						"" != e[t] && "undefined" != typeof e[t] || (e[t] = a)
					}), e
			},
			chooseEvent : function(e) {
				e.stopPropagation();
				var t = e.data;
				t.oLayerSettings = jQuery.commonLayer.initLayerSettings(t, {}), "function" == typeof closeAllFloatDiv && closeAllFloatDiv(), jQuery.FLayer.setContent(t.oLayerSettings, t.data_init(t)), jQuery.FLayer.open(t)
			},
			initLayerSettings : function(e, t) {
				if ("undefined" == typeof e.oLayerSettings) {
					var a = {
						layer_id : e.layer_id,
						layer_type : "1",
						layer_before_open : e.layer_before_open,
						layer_after_open : e.layer_after_open,
						layer_after_close : e.layer_after_close,
						layer_init : !0
					};
					a = jQuery.FLayer.init(a)
				} else
					a = e.oLayerSettings;
				return a
			},
			getInitContent : function(e) {
				return jQuery.commonSelect.initCurrentSelected(e), '<div id="' + e.init + '" class="panel_lnp panel_py ' + e.init_class + '">' + e.getTopContent(e) + e.getCenterContent(e) + e.getBottomContent(e) + "</div>"
			},
			getTopContent : function(e) {
				return e.getTopMessageContent(e) + e.getTopMultipleContent(e)
			},
			getTopMessageContent : function(e) {
				var t = '<h2 id="' + e.top + '"><p id="' + e.top_message + '">' + lang.layer.select + lang[e.data_type].layer_name;
				return e.data_multiple && (t += '<span class="sp">（' + lang.layer.data_max_select.replace(/{max}/, "<strong>" + e.data_multiple_max + "</strong>") + "）</span>"), t += '</p><a class="' + e.close + '" href="javascript:void(0);"><i></i></a></h2>'
			},
			getTopMultipleContent : function(e) {
				var t = "";
				if (e.data_multiple) {
					var a = "";
					0 == jQuery.commonSelect.oCurrentSelected[e.data_type].length && (a = "element_hide"), t = '<div id="' + e.multiple + '" class="panel_tags mk ' + a + '"><div class="tin" id="' + e.multiple_selected + '">', $.each(jQuery.commonSelect.oCurrentSelected[e.data_type], function(a, n) {
						t += '<span id="' + e.multiple_selected_each + "_" + n + '" class="ttag" data-value="' + n + '"><span>' + e.data[n] + "</span><em></em></span>"
					}), t += '</div><p id="' + e.multiple_error + '" class="error element_hide">' + lang.layer.data_max_select.replace(/{max}/, e.data_multiple_max) + "</p></div>"
				}
				return t
			},
			getCenterContent : function(e) {
				return '<div id="' + e.center + '" class="panel_selt">' + e.getCenterLeftContent(e) + e.getCenterRightContent(e) + "</div>"
			},
			getCenterLeftContent : function(e) {
				var t = '<ul id="' + e.center_left + '" class="sbar">',
					a = "";
				return $.each(e.data_navigation, function(n, i) {
						a = "0" == n ? e.selected_class : "", t += '<li id="' + e.center_left_each + "_" + i.nav + '" class="' + a + '" data-value="' + i.nav + '">' + i[e.language] + "<em></em></li>"
					}), t += "</ul>"
			},
			getCenterRightContent : function(e) {
				return '<div id="' + e.center_right + '" class="con">' + e.getCenterRightCenterContent(e, e.data_navigation[0].nav) + '<div class="declear"></div></div><div class="clear"></div>'
			},
			getCenterRightCenterContent : function(e, t) {
				var a = '<div id="' + e.center_right_list + "_" + t + '" class="' + e.center_right_list + ' de d3"><table><tbody>';
				return $.each(jQuery.commonLayer.getBigCategoryByNavigation(e, t), function(n, i) {
						0 == n % e.data_row_num && (a += "<tr>"), a += '<td class="js_more" name="0"><em id="' + e.center_right_list_category + "_" + t + "_" + i + '" data-value="' + i + '" data-navigation="' + t + '" class="' + jQuery.commonLayer.getSelectedClass(e, i) + '">' + e.data[i] + "</em></td>", e.data_row_num - 1 == n % e.data_row_num && (a += "</tr>")
					}), a += "</tbody></table></div>"
			},
			getBigCategoryByNavigation : function(e, t) {
				var a = [];
				return $.each(e.data_navigation, function(e, n) {
						n.nav != t || (a = n.category)
					}), a
			},
			getBottomContent : function(e) {
				var t = "";
				return e.data_multiple && (t = '<div id="' + e.bottom + '" class="but_box"><span class="p_but" id="' + e.bottom_save + '">' + lang.layer.save + '</span><span class="p_but gray ' + e.close + '">' + lang.layer.cancel + "</span></div>"), t
			},
			beforeOpen : function(e) {
				e.data_multiple && ($("#" + e.multiple_selected).find(".ttag").bind("click", e, jQuery.commonLayer.deleteSelectEvent), $("#" + e.bottom_save).bind("click", e, jQuery.commonLayer.saveEvent)), $("#" + e.center_left).find("li").bind("click", e, jQuery.commonLayer.showCenterRightCenterEvent), $("#" + e.center_right).find("td em").bind("click", e, jQuery.commonLayer.getSelectEvent), $("." + e.close).bind("click", e, jQuery.commonLayer.closeEvent)
			},
			afterOpen : function(e) {},
			deleteSelectEvent : function(e) {
				e.stopPropagation();
				var t = e.data;
				jQuery.commonSelect.canDelete(t) && jQuery.commonLayer.deleteSelect(t, $(this).attr("data-value"))
			},
			deleteSelect : function(e, t) {
				jQuery.commonSelect.deleteSelect(e, $("#" + e.multiple_selected_each + "_" + t)), $("#" + e.under_each + "_" + t).remove();
				var a = $("#" + e.multiple);
				0 == a.find(".ttag").length ? a.hide() : $("#" + e.multiple_error).hide(), jQuery.commonLayer.removeSelectedClass(e, t)
			},
			getSelectedClass : function(e, t) {
				var a = "";
				return "" != e.data_map && "undefined" != typeof e.data_map[t] || $.inArray(t, jQuery.commonSelect.oCurrentSelected[e.data_type].toString().split(",")) > -1 && (a = e.selected_class), a
			},
			addSelectedClass : function(e, t, a) {
				$.each($("#" + e.center_right + " [data-value=" + t + "]"), function(t, a) {
					$(this).addClass(e.selected_class)
				})
			},
			removeSelectedClass : function(e, t) {
				$.each($("#" + e.center_right + " [data-value=" + t + "]"), function(t, a) {
					$(this).removeClass(e.selected_class)
				})
			},
			showCenterRightCenterEvent : function(e) {
				e.stopPropagation();
				var t = e.data,
					a = $(this).attr("data-value");
				$(this).addClass(t.selected_class), $(this).siblings().removeClass(t.selected_class);
				var n = $("#" + t.center_right).find("." + t.center_right_list);
				n.hide();
				var i = $("#" + t.center_right_list + "_" + a);
				i.length > 0 ? i.show() : (n.eq(0).after(t.getCenterRightCenterContent(t, a)), $("#" + t.center_right_list + "_" + a).find("td em").bind("click", t, jQuery.commonLayer.getSelectEvent)), "area" == t.data_type && "000000" == a ? $("#work_position_special_area_zhusanjiao").show() : $("#work_position_special_area_zhusanjiao").hide(), $("#" + t.center_right).find("." + t.center_right_list_sub_category).css({
					position : "static"
				}).remove()
			},
			getSelectEvent : function(e) {
				e.stopPropagation();
				var t = e.data,
					a = $(this).attr("data-value"),
					n = $(this).attr("data-navigation"),
					i = jQuery.commonLayer.getSub(t, a);
				if (i.length > 0)
					if ($(this).hasClass(t.center_right_list_sub_category_each_all)) jQuery.commonLayer.setSelect(t, a, n);
					else if ($("#" + t.center_right).find("." + t.center_right_list_sub_category).hide(), $("#" + t.center_right_list_sub_category + "_" + n + "_" + a).length > 0) $("#" + t.center_right_list_sub_category + "_" + n + "_" + a).show();else {
						$(this).parent().parent().after(t.getSubContent(t, i, $(this), a));
						var o = $("#" + t.center_right_list_sub_category + "_" + n + "_" + a);
						t.data_parent_click && o.find("." + t.center_right_list_sub_category_each_all).bind("click", t, jQuery.commonLayer.getSelectEvent), o.find("." + t.center_right_list_sub_category_each_unit).bind("click", t, jQuery.commonLayer.getSelectEvent)
				}
				else jQuery.commonLayer.setSelect(t, a, n)
			},
			getSub : function(e, t) {
				var a = [];
				return "string" == typeof e.data[t] && "" != e.data_map && "undefined" != typeof e.data_map[t] && "" != e.data_map[t] && (a = e.data_map[t].split(",")), a
			},
			getSubContent : function(e, t, a, n) {
				var i = "",
					o = "";
				-1 != jQuery.commonSelect.oCurrentSelected[e.data_type].toString().indexOf(n) && (o = e.selected_class);
				var r = a.attr("data-navigation");
				return i += '<tr class="' + e.center_right_list_sub_category + '" id="' + e.center_right_list_sub_category + "_" + r + "_" + n + '"><td colspan="' + e.data_row_num + '"><div class="in d0"><font style="left:' + jQuery.commonLayer.getArrowPosition(a) + 'px"></font><div>', e.data_parent_click && (i += '<span><em id="' + e.center_right_list_sub_category_each + "_" + r + "_" + n + '" class="' + o + " " + e.center_right_list_sub_category_each_all + '" data-value="' + n + '" data-navigation="' + r + '">' + lang.layer.all + "</em></span>"), $.each(t, function(t, a) {
						o = "", -1 != jQuery.commonSelect.oCurrentSelected[e.data_type].toString().indexOf(a) && (o = e.selected_class), i += '<span><em id="' + e.center_right_list_sub_category_each + "_" + r + "_" + a + '" class="' + e.center_right_list_sub_category_each_unit + " " + o + '" data-value="' + a + '" data-navigation="' + r + '">' + e.data[a] + "</em></span>"
					}), i += "</div></div></td></tr>"
			},
			getArrowPosition : function(e) {
				return e.position().left + e.width() / 2
			},
			setSelect : function(e, t, a) {
				if (e.data_multiple) switch (jQuery.commonLayer.getOperation(e, t)) {
					case "add":
						jQuery.commonSelect.canAdd(e, t) ? jQuery.commonLayer.add(e, t, a) : ($("#" + e.multiple_error).text("最多只能选择" + e.data_multiple_max + "项"), $("#" + e.multiple_error).show());
						break;case "delete":
						jQuery.commonSelect.canDelete(e) && jQuery.commonLayer.deleteSelect(e, t)
				}
				else jQuery.commonSelect.replaceCurrentSelected(e, t), jQuery.commonSelect.save(e, t, e.data_struct_type)
			},
			getOperation : function(e, t) {
				var a = "add",
					n = !1;
				return $.each(jQuery.commonSelect.oCurrentSelected[e.data_type], function(e, a) {
						a != t || (n = !0)
					}), n && (a = "delete"), a
			},
			add : function(e, t, a) {
				var n = jQuery.commonSelect.getRepeatSelected(e, t);
				n.length > 0 && $.each(n, function(t, a) {
					jQuery.commonLayer.deleteSelect(e, a)
				}), $('<span id="' + e.multiple_selected_each + "_" + t + '" class="ttag" data-value="' + t + '"><span>' + e.data[t] + "</span><em></em></span>").appendTo($("#" + e.multiple_selected)).bind("click", e, jQuery.commonLayer.deleteSelectEvent), $("#" + e.multiple).show(), jQuery.commonLayer.addSelectedClass(e, t, a), jQuery.commonSelect.saveCurrentSelected(e, t)
			},
			closeEvent : function(e) {
				e.stopPropagation();
				var t = e.data;
				return jQuery.commonSelect.initCurrentSelected(t), jQuery.FLayer.close(t), !1
			},
			saveEvent : function(e) {
				e.stopPropagation();
				var t = e.data;
				jQuery.commonSelect.save(t, "", t.data_struct_type), jQuery.FLayer.close(t)
			}
		}
	})
}, function(e, t, a) {
	"use strict";$.extend({
		commonSelect : {
			oCurrentSelected : {},
			oSaveCodeTypeSplit : {
				1 : ",",
				2 : " "
			},
			oSaveTextTypeSplit : {
				1 : "+",
				2 : " "
			},
			sMunicipalityArea : "010000,020000,040000,050000,060000",
			sForeignArea : "361000,362000,363000,364000,365000,366000",
			sPecialArea : "01",
			initCurrentSelected : function(e) {
				"" != $("#" + e.code_id).val() ? jQuery.commonSelect.oCurrentSelected[e.data_type] = $("#" + e.code_id).val().split(jQuery.commonSelect.oSaveCodeTypeSplit[e.save_code_type]) : jQuery.commonSelect.oCurrentSelected[e.data_type] = []
			},
			saveEvent : function(e) {
				e.stopPropagation();
				var t = e.data,
					a = $(this).attr("data-value");
				jQuery.commonSelect.canAdd(t, a) && jQuery.commonSelect.save(t, a, t.data_struct_type)
			},
			saveRecommendEvent : function(e) {
				e.stopPropagation();
				var t = e.data;
				jQuery.commonSelect.save(t, $(this).attr("data-value"), t.data_recommend_struct_type)
			},
			getRepeatSelected : function(e, t) {
				var a = [];
				return $.each(jQuery.commonSelect.oCurrentSelected[e.data_type], function(n, i) {
						switch (e.data_length) {
						case "1":
							t == t.substr(0, 2) + "00" ? i.substr(0, 2) == t.substr(0, 2) && a.push(i) : i.substr(0, 2) == t.substr(0, 2) && i == i.substr(0, 2) + "00" && a.push(i);
							break;case "2":
							switch (e.data_type) {
							case "area":
								"01" != t && (-1 == jQuery.commonSelect.sMunicipalityArea.indexOf(t.substr(0, 2) + "0000") ? t == t.substr(0, 2) + "0000" ? i.substr(0, 2) == t.substr(0, 2) && a.push(i) : t == t.substr(0, 4) + "00" ? (i.substr(0, 2) == t.substr(0, 2) && i == i.substr(0, 2) + "0000" && a.push(i), i.substr(0, 4) == t.substr(0, 4) && a.push(i)) : (i.substr(0, 2) == t.substr(0, 2) && i == i.substr(0, 2) + "0000" && a.push(i), i.substr(0, 4) == t.substr(0, 4) && i == i.substr(0, 4) + "00" && a.push(i)) : t == t.substr(0, 2) + "0000" ? "01" != i && i.substr(0, 2) == t.substr(0, 2) && a.push(i) : i.substr(0, 2) == t.substr(0, 2) && i == i.substr(0, 2) + "0000" && a.push(i))
							}
						}
					}), a
			},
			canAdd : function(e, t) {
				var a = !0;
				return 0 == jQuery.commonSelect.getRepeatSelected(e, t).length && e.data_multiple && (jQuery.commonSelect.oCurrentSelected[e.data_type].length < e.data_multiple_max ? $.each(jQuery.commonSelect.oCurrentSelected[e.data_type], function(n, i) {
						if ($.trim(i) == $.trim(t)) return a = !1, e.data_add_error_alert && alert(lang.layer.data_added), !1
					}) : (e.data_add_error_alert && alert(lang.layer.data_max_select.replace(/{max}/, e.data_multiple_max)), a = !1)), a
			},
			canDelete : function(e) {
				var t = !0;
				return 0 != e.data_multiple_min ? jQuery.commonSelect.oCurrentSelected[e.data_type].length <= e.data_multiple_min && ($("#" + e.multiple_error).text("最少选择" + e.data_multiple_min + "项"), $("#" + e.multiple_error).show(), t = !1) : t = !0, t
			},
			save : function(e, t, a) {
				switch ("" != t && jQuery.commonSelect.saveCurrentSelected(e, t), e.save_type) {
				case "1":
					jQuery.commonSelect.saveText(e, t, a), jQuery.commonSelect.saveCode(e);
					break;case "2":
					jQuery.commonSelect.saveUnderText(e, t, a), jQuery.commonSelect.saveCode(e)
				}
				e.data_multiple || jQuery.FLayer.close(e), jQuery.commonSelect.setClearDataAttr(e, "3")
			},
			setClearDataAttr : function(e, t) {
				if (!e.data_multiple && ("undefined" == typeof e.data_clear || !0 === e.data_clear)) {
					var a = $("#" + e.text_id),
						n = $("#" + e.code_id);
					switch (t) {
					case "1":
						a.attr("pre_value", a.val()), n.attr("pre_code", n.val()), "1" == e.self_define && $("#" + e.self_define_text_id).attr("pre_value", $("#" + e.self_define_text_id).val());
						break;case "2":
						a.val() != a.attr("pre_value") && (a.attr("pre_value", ""), n.attr("pre_code", ""), "1" == e.self_define && $("#" + e.self_define_text_id).attr("pre_value", ""));
						break;case "3":
						a.attr("pre_value", a.val()), n.attr("pre_code", n.val()), "1" == e.self_define && $("#" + e.self_define_text_id).attr("pre_value", $("#" + e.self_define_text_id).val())
					}
				}
			},
			getRealData : function(e, t, a) {
				var n = [];
				switch (a) {
				case "1":
					e.data_multiple ? $.each(jQuery.commonSelect.oCurrentSelected[e.data_type], function(t, a) {
						n.push({
							k : a,
							v : e.data[a]
						})
					}) : n.push({
						k : t,
						v : e.data[t]
					});
					break;case "2":
					$.each(jQuery.commonSelect.oCurrentSelected[e.data_type], function(e, t) {
						n.push({
							k : t,
							v : t
						})
					})
				}
				return n
			},
			saveText : function(e, t, a) {
				var n = jQuery.commonSelect.getRealData(e, t, a),
					i = [];
				$.each(n, function(e, t) {
					i.push(t.v)
				});
				var o = $("#" + e.text_id);
				o.val(i.join(jQuery.commonSelect.oSaveTextTypeSplit[e.save_text_type])), o.hasClass(e.place_holder_class) && o.removeClass(e.place_holder_class), "1" == e.self_define && $("#" + e.self_define_text_id).val("")
			},
			saveUnderText : function(e, t, a) {
				var n = jQuery.commonSelect.getRealData(e, t, a);
				$("#" + e.under_id).html(""), $.each(n, function(t, a) {
					$('<span data-value="' + a.k.replace(/</g, "&lt;").replace(/\"/g, "&quot;") + '" class="ttag"><span title="' + a.v.replace(/</g, "&lt;").replace(/\"/g, "&quot;") + '">' + a.v.replace(/</g, "&lt;").replace(/\"/g, "&quot;") + "</span><em></em></span>").appendTo($("#" + e.under_id)).bind("click", e, jQuery.commonSelect.deleteUnderSelectEvent)
				}), $("#" + e.under_id).append('<div class="clear"></div>')
			},
			getMultipleSelect : function(e) {
				var t = {
					code : [],
					text : []
				};
				return $.each(jQuery.commonSelect.oCurrentSelected[e.data_type], function(a, n) {
						t.code.push(n), t.text.push(e.data[n])
					}), t
			},
			saveCurrentSelected : function(e, t) {
				e.data_multiple ? jQuery.commonSelect.oCurrentSelected[e.data_type].push(t) : (jQuery.commonSelect.oCurrentSelected[e.data_type] = [], jQuery.commonSelect.oCurrentSelected[e.data_type].push(t))
			},
			deleteUnderSelectEvent : function(e) {
				e.stopPropagation();
				var t = e.data;
				switch (jQuery.commonSelect.deleteSelect(t, $(this)), t.save_type) {
				case "1":
				case "2":
					jQuery.commonSelect.saveCode(t)
				}
			},
			saveCode : function(e) {
				$("#" + e.code_id).val(jQuery.commonSelect.oCurrentSelected[e.data_type].join(jQuery.commonSelect.oSaveCodeTypeSplit[e.save_code_type]))
			},
			deleteSelect : function(e, t) {
				"string" == typeof t ? jQuery.commonSelect.deleteCurrentSelected(e, t) : (t.remove(), jQuery.commonSelect.deleteCurrentSelected(e, t.attr("data-value")))
			},
			deleteCurrentSelected : function(e, t) {
				var a = [];
				$.each(jQuery.commonSelect.oCurrentSelected[e.data_type], function(e, n) {
					n != t && a.push(n)
				}), jQuery.commonSelect.oCurrentSelected[e.data_type] = a
			},
			replaceCurrentSelected : function(e, t) {
				jQuery.commonSelect.oCurrentSelected[e.data_type] = [], jQuery.commonSelect.oCurrentSelected[e.data_type].push(t)
			},
			getObjectKeys : function(e) {
				var t = [];
				if (e.keys)
					t = Object.keys(e);else
					for (var a in e) e.hasOwnProperty(a) && t.push(a);
				return t
			},
			saveSelfDefineStep1 : function(e) {
				e.stopPropagation();
				var t = e.data;
				$("#" + t.self_define_text_id + "_selfdefine_div").find("." + t.association_each_click).removeClass("on"), $("#" + t.self_define_text_id + "_selfdefine_code").val($(this).attr("data-value")), $(this).addClass("on")
			}
		}
	})
}, function(e, t, a) {
	"use strict";window.oFTM = {
		2400 : "2401,2402,2403",
		"0100" : "0106,0107,0144,0148,0109,0110,0111,0112,0113,0114,0115,0116,0145,0146,0117,0147,0137,0123,0127,0143,0108,0141,0142",
		2500 : "2501,2514,2502,2537,2530,2503,2516,2531,2525,2526,2524,2532,2533,2534,2510,2535,2527,2528,2504,2515,2536,2529,2539,2512,2513,2505,2506,2507,2508,2517,2518,2519,2520,2521,2522,2523,2509,2511",
		2600 : "2601,2602,2603,2604,2605,2606,2607,2608,2609",
		2700 : "2701,2702,2712,2715,2703,2704,2705,2706,2707,2708,2709,2713,2714,2710,2716,2717,2711",
		2800 : "2801,2802,2803,2804,2805,2806,2807,2808,2810,2811,2809",
		2900 : "2901,2902,2903,2917,2924,2920,2921,2922,2904,2905,2906,2918,2907,2908,2909,2910,2919,2911,2912,2923,2913,2914,2915,2925,2916",
		"0200" : "0201,0202,0203,0232,0233,0207,0220,0235,0208,0230,0226,0234,0231",
		3000 : "3009,3001,3002,3003,3004,3005,3010,3008,3006,3011,3012,3007",
		3100 : "3101,3102,3108,3109,3103,3104,3105,3106,3107",
		3200 : "3201,3202,3203,3204,3210,3205,3206,3207,3208,3213,3211,3212,3209",
		"0400" : "0444,0401,0402,0445,0403,0404,0405,0414,0422,0448,0406,0407,0408,0409,0449,0450,0410,0419,0411,0412,0446,0443",
		3300 : "3301,3302,3303,3304,3312,3315,3305,3306,3307,3313,3308,3309,3314,3310,3311",
		2200 : "2207,2231,2223,2224,2225,2226,2227,2228,2208,2209,2215,2229,2210,2212,2211,2213,2214,2230,2222,2232,2216,2221",
		3400 : "3401,3402,3403,3404,3405,3406,3414,3407,3408,3409,3410,3411,3413,3412",
		3500 : "3501,3502,3513,3503,3504,3505,3506,3514,3507,3509,3515,3508,3512,3516,3510,3511",
		3600 : "3601,3602,3603,3604,3605,3606,3607,3608,3615,3609,3610,3614,3611,3612,3613",
		"0500" : "0510,0511,0547,0559,0584,0512,0513,0514,0515,0523,0560,0582,0539,0561,0548,0544,0580,0537,0581,0562,0563,0564,0565,0566,0567,0568,0569,0570,0583,0571,0572,0575,0576,0573,0577,0585,0578,0579,0574",
		5400 : "5407,5401,5402,5403,5414,5408,5409,5412,5404,5405,5406,5410,5413,5415,5416,5417,5418,5419,5420,5411",
		5900 : "5901,5903,5907,5912,5913,5914,5905,5906,5908,5902,5904,5910,5911",
		3700 : "3710,3701,3707,3715,3716,3703,3717,3706,3718,3719,3720,3721,3722,3709,3723,3724,3708,3725,3726,3727,3713",
		3800 : "3812,3801,3813,3802,3803,3804,3814,3805,3806,3811,3808,3809,3807,3815,3816,3817,3818,3819,3820,3821,3822,3823,3824,3825,3826,3827,3828,3810",
		3900 : "3901,3902,3903,3904,3905,3908,3909,3907",
		4000 : "4001,4002,4003,4004,4005,4006,4007,4008",
		"0800" : "0827,0801,0802,0814,0828,0825,0826,0803,0804,0808,0809,0834,0810,0833,0829,0830,0832,0811,0812,0815,0813,0831,0835,0823,0836,0824",
		4100 : "4101,4116,4103,4104,4126,4105,4106,4123,4107,4108,4109,4110,4120,4121,4122,4111,4112,4102,4117,4124,4118,4113,4125,4114,4119,4115",
		5500 : "5501,5502,5503,5504,5505,5506,5507,5509,5508",
		1300 : "1302,1328,1301,1317,1318,1319,1320,1308,1327,1321,1322,1313,1325,1309,1314,1304,1310,1323,1324,1305,1315,1326,1311",
		4200 : "4201,4202,4203,4204,4205,4206,4212,4211,4207,4208,4209,4210",
		4300 : "4315,4301,4302,4303,4304,4305,4306,4307,4308,4309,4310,4312,4313,4314,4311",
		"0300" : "0301,0302,0303,0304,0305,0324,0306,0307,0330,0308,0335,0336,0337,0310,0311,0312,0338,0329",
		4400 : "4401,4402,4403,4414,4404,4405,4406,4411,4407,4408,4415,4412,4413,4410",
		4500 : "4501,4502,4517,4503,4516,4504,4505,4507,4508",
		"0900" : "0930,0931,0904,0932,0924,0933,0925,0926,0927,0919,0920,0928,0929,0921",
		2100 : "2123,2101,2131,2132,2102,2118,2119,2125,2103,2126,2104,2122,2109,2108,2117,2120,2110,2127,2105,2124,2106,2133,2121,2107,2128,2129,2130,2111,2134,2135,2136,2137,2138,2139,2140,2141,2142,2143,2144,2145,2116",
		4600 : "4601,4602,4604,4603,4608,4610,4611,4612,4607",
		6000 : "6009,6010,6001,6002,6004,6007,6006,6008",
		4700 : "4702,4714,4703,4716,4705,4715,4706,4701,4704,4709,4710,4711,4708,4712,4713,4707",
		"0600" : "0601,0611,0602,0603,0604,0605,0606,0626,0607,0608,0627,0628,0609,0610,0629,0630,0625",
		"0700" : "0701,0707,0702,0704,0705,0710,0711,0712,0708,0709,0703,0706",
		2300 : "2301,2302,2303,2304,2310,2305,2307,2308,2306,2309",
		1400 : "1401,1402,1403,1406,1404,1409,1408,1407,1405",
		1100 : "1101,1103,1106,1102,1107,1109,1110,1108,1105",
		1200 : "1213,1208,1204,1201,1209,1207,1215,1202,1210,1205,1214,1216,1211,1206",
		5700 : "5701,5702,5703,5707,5706,5704,5705",
		1000 : "1002,1001",
		4800 : "4801,4819,4802,4803,4806,4807,4820,4821,4822,4823,4812,4809,4816,4808,4804,4824,4818,4813,4811,4825,4814,4815,4817,4810",
		4900 : "4901,4902,4916,4917,4903,4905,4912,4915,4904,4906,4918,4907,4914,4908,4919,4920,4921,4909,4910,4913,4911",
		5000 : "5018,5016,5001,5019,5002,5013,5014,5020,5021,5022,5004,5005,5006,5017,5003,5023,5007,5024,5010,5011",
		5100 : "5101,5112,5114,5115,5102,5116,5117,5105,5118,5103,5119,5104,5120,5121,5113,5108,5109,5110,5111,5106,5107",
		1800 : "1822,1823,1825,1827,1810,1830,1831,1832,1833,1826,1835,1836,1837,1838,1839,1840,1824,1801,1828,1829",
		5200 : "5206,5209,5210,5211,5205,5212,5213,5214,5202,5215,5216,5203,5207",
		1500 : "1501",
		2000 : "2001,2002,2003,2004,2005,2010,2006,2011,2009,2007,2012,2013,2008",
		1600 : "1605,1602,1601,1604",
		1700 : "1702,1701,1703",
		5300 : "5301",
		5600 : "5601,5604,5609,5605,5606,5602,5607,5608,5603",
		5800 : "5801,5802,5803,5804,5805,5808,5806,5807",
		6100 : "6101,6102,6103,6104,6105,6106,6107,6108",
		6200 : "6201,6202,6203,6204,6205,6206,6207,6208,6209,6210,6211,6212,6213,6214,6215,6216,6217,6218,6219,6220,6221,6222",
		6300 : "6301,6302,6304,6305,6306,6307,6308,6309,6310,6311,6312,6313,6314,6315,6316,6317,6318",
		6400 : "6401,6402,6403,6404,6405,6406,6407,6408",
		6500 : "6501,6502,6503,6504,6505,6506,6507,6509,6510,6511,6508",
		1900 : "1902,1903,1901"
	}, window.oMajorM = {
		"0200" : "0201,0202,0203,0204,0206,0207",
		"0300" : "0301,0302,0313,0303,0317,0307,0305,0304,0310,0314,0311,0315,0308,0318,0319,0320,0309,0321,0322,0316,0323",
		"0400" : "0401,0408,0420,0402,0411,0412,0413,0403,0414,0404,0421,0415,0416,0417,0418,0419",
		3500 : "3501,3502",
		"0100" : "0107,0109,0114,0108,0115,0116,0117,0118",
		"0500" : "0501,0505,0508,0507,0509,0510,0502,0503,0504,0506,0511,0512,0513",
		2100 : "2101",
		2200 : "2201,2203,2204,2202,2205",
		1900 : "1907,1905,1906,1901,1902,1903,1904,1908",
		2800 : "2801,2802,2803,2804,2805,2806",
		"0600" : "0603,0611,0601,0608,0606,0609,0604,0605,0612,0607,0602,0613,0610,0614",
		1800 : "1801,1802",
		2000 : "2001,2002,2003,2004",
		2500 : "2501",
		2600 : "2601,2602,2608,2603,2606,2604,2605,2609",
		2900 : "2901,2902,2903,2904",
		2700 : "2701",
		2300 : "2301,2302,2303",
		2400 : "2401,2402,2403",
		3200 : "3201",
		3000 : "3001,3002,3003,3004,3005,3006",
		4100 : "4101",
		1400 : "1401,1402",
		1500 : "1501,1502,1503,1504",
		1600 : "1601,1602,1606,1603,1604,1605",
		3100 : "3103,3101,3104",
		1700 : "1701,1702,1710,1704,1711,1703,1712,1713,1705,1706,1707,1709,1708",
		1000 : "1012,1001,1003,1004,1005,1006,1002,1008,1007,1013,1009,1010,1014,1015,1016,1017,1018,1019,1020",
		"0700" : "0701,0718,0702,0716,0715,0703,0704,0705,0707,0708,0706,0709,0710",
		1200 : "1201,1210,1211,1202,1212,1213,1209,1214,1204,1203,1205,1206,1207,1208,1215",
		"0900" : "0901,0902,0904,0907,0905,0910,0909,0903,0906,0908,0911",
		1100 : "1101,1102,1103",
		"0800" : "0801,0802,0803,0804,0805,0806",
		4000 : "4001,4002",
		3400 : "3401,3402,3411,3403,3412,3413,3414,3404,3405,3415,3406,3407,3408,3416,3410,3409,3417,3418",
		3300 : "3301,3311,3306,3314,3302,3312,3313,3303,3304,3305,3307,3308,3309,3310",
		1300 : "1301,1302,1303",
		3600 : "3601,3602,3603,3604,3605,3606,3607,3608,3609",
		3700 : "3701,3702,3703,3704,3705,3706,3707",
		3800 : "3801,3802",
		3900 : "3901,3902,3903,3904,3905,3906",
		4200 : "4201,4202,4203,4204,4205,4206,4207,4208"
	}, window.oAreaM = {
		"010000" : "010100,010200,010500,010600,010700,010800,010900,011000,011100,011200,011300,011400,011500,011600,011700,011800",
		"020000" : "020100,020300,020400,020500,020600,020800,020900,021000,021100,021200,021300,021400,021500,021600,021800,021900",
		"030200" : "030201,030202,030203,030204,030205,030206,030207,030208,030209,030211,030212",
		"030500" : "030501,030502,030503,030504,030505,030506,030507,030508",
		"030600" : "030601,030602,030603,030604,030605",
		"030800" : "030801,030802,030803,030804,030805,030806,030807,030808,030809,030810,030811,030812,030813,030814,030815,030816,030817,030818,030819,030820,030821,030822,030823,030824,030825,030826,030827,030828,030829,030830,030831,030832,030833",
		"040000" : "040100,040200,040300,040400,040500,040600,040700,040800,040900,041000",
		"050000" : "050100,050200,050300,050400,050500,050600,050700,050800,050900,051000,051100,051200,051300,051400,051500,051600",
		"060000" : "060100,060200,060300,060400,060600,060700,060800,060900,061000,061100,061200,061300,061400,061500,061600,061700,061900,062000,062100,062200,062300,062400,062500,062600,062700,062800,062900,063000,063100,063200,063300,063400,063500,063600,063700,063800,063900,064000",
		"070200" : "070201,070203,070204,070205,070207,070208,070209,070210,070211,070212,070213",
		"070300" : "070301,070303,070304,070305,070306,070307",
		"070400" : "070401,070404,070405,070406,070407,070408,070409",
		"070500" : "070501,070502,070504,070505,070506,070507",
		"080200" : "080201,080202,080203,080204,080205,080206,080207,080208,080209,080210,080211,080212,080213",
		"080300" : "080301,080303,080304,080305,080306,080307,080308,080309,080310,080311,080312",
		"090200" : "090201,090202,090203,090204,090205,090206,090207,090208,090209,090210,090211,090212,090213,090214,090215,090216,090217,090218,090219,090220,090221",
		110200 : "110201,110202,110203,110204,110205,110206,110207,110208,110209,110210,110211,110212,110213",
		120200 : "120201,120202,120203,120204,120205,120206,120207,120208,120209,120210,120211",
		120300 : "120301,120302,120303,120304,120305,120306,120307,120308,120309,120310,120311",
		130200 : "130201,130202,130203,130204,130205,130206,130207,130208,130209,130210",
		150200 : "150201,150202,150203,150204,150205,150206,150207,150208,150209,150210,150211,150212,150213,150214,150215",
		170200 : "170201,170202,170203,170204,170205,170206,170207,170208,170209,170210,170211,170212,170213,170214,170215,170216",
		180200 : "180201,180202,180203,180204,180205,180206,180207,180208,180209,180210,180211,180212,180213,180214,180215",
		190200 : "190201,190202,190203,190204,190205,190206,190207,190208,190209",
		200200 : "200201,200202,200203,200204,200205,200206,200207,200208,200209,200210,200211,200212,200213,200214,200215,200216,200217,200218,200219,200220,200221",
		220200 : "220201,220202,220203,220204,220205,220206,220207,220208,220209,220210,220211,220212,220213,220214,220215,220216,220217,220218",
		230200 : "230201,230202,230203,230204,230205,230206,230207,230208,230209,230210,230211,230212,230213",
		230300 : "230301,230302,230303,230304,230305,230306,230307,230308,230309,230310,230312,230313,230314",
		240200 : "240201,240202,240203,240204,240205,240206,240207,240208,240209,240210,240211,240212,240213,240214",
		250200 : "250201,250202,250203,250204,250205,250206,250207,250208,250209,250210,250211,250212,250213,250214",
		361000 : "361001,361002,361003,361004,361005,361006,361007,361008,361009,361010,361011,361012,361013,361014,361015,361016,361017,361018,361019,361020,361021,361022,361023",
		362000 : "362001,362002,362003,362004,362005,362006,362007,362008,362009,362010,362011,362012,362013,362014,362015,362016,362017,362018,362019,362020,362021,362022,362023",
		363000 : "363001,363002,363003,363004,363005,363006,363007,363008,363009,363010",
		364000 : "364001,364002,364003,364004,364005,364006,364007,364008,364009,364010,364011,364012,364013,364014",
		365000 : "365001,365002"
	}, window.oCountryM = {
		361000 : "361001,361002,361003,361004,361005,361006,361007,361008,361009,361010,361011,361012,361013,361014,361015,361016,361017,361018,361019,361020,361021,361022,361023",
		362000 : "362001,362002,362003,362004,362005,362006,362007,362008,362009,362010,362011,362012,362013,362014,362015,362016,362017,362018,362019,362020,362021,362022,362023",
		363000 : "363001,363002,363003,363004,363005,363006,363007,363008,363009,363010",
		364000 : "364001,364002,364003,364004,364005,364006,364007,364008,364009,364010,364011,364012,364013,364014",
		365000 : "365001,365002"
	}
}, function(e, t, a) {
	"use strict";
	var n,
		i;
	n = jQuery, i = {
		id : "layer_main",
		text_id : "layer_main_text",
		code_id : "layer_main_code",
		under_id : "layer_main_under",
		save_type : "1",
		save_text_type : "1",
		save_under_text_type : "1",
		save_code_type : "1",
		data : "",
		data_length : "1",
		data_struct_type : "1",
		data_map : "",
		data_navigation : "",
		data_multiple : !1,
		data_parent_click : !0,
		data_add_error_alert : !1,
		data_init : "",
		data_click : "",
		data_multiple_max : 5,
		data_row_num : 3,
		data_type : "",
		layer_id : "layer_main_id",
		layer_before_open : "",
		layer_after_open : "",
		layer_after_close : "",
		layer_type : "1",
		language : "c",
		selected_class : "on",
		init_class : "panel_ct2",
		place_holder_class : "placeholder"
	}, n.fn.funtypeLayer = function(e) {
		var t = {},
			a = {
				id : "funtype",
				text_id : "funtype_text",
				code_id : "funtype_code",
				under_id : "funtype_under",
				layer_id : "funtype_layer_id",
				data : ft,
				data_map : oFTM,
				data_navigation : aFTN,
				init_class : "panel_ct2 con_l",
				data_type : "funtype"
			};
		return this.each(function() {
			e && n.extend(t, i, a, e), t = jQuery.commonLayer.init(t), n(this).bind("click", t, t.data_click)
		})
	}, n.fn.indtypeLayer = function(e) {
		var t = {},
			a = {
				id : "indtype",
				text_id : "indtype_text",
				code_id : "indtype_code",
				under_id : "indtype_under",
				layer_id : "indtype_layer_id",
				data : it,
				data_navigation : aITN,
				init_class : "panel_ct2 con_l",
				data_type : "indtype"
			};
		return this.each(function() {
			e && n.extend(t, i, a, e), t = jQuery.commonLayer.init(t), n(this).bind("click", t, t.data_click)
		})
	}, n.fn.certLayer = function(e) {
		var t = {},
			a = {
				id : "cert",
				text_id : "cert_text",
				code_id : "cert_code",
				under_id : "cert_under",
				layer_id : "cert_layer_id",
				data : cert,
				data_navigation : aCertN,
				init_class : "panel_ct2 con_m",
				data_type : "cert"
			};
		return this.each(function() {
			e && n.extend(t, i, a, e), t = jQuery.commonLayer.init(t), n(this).bind("click", t, t.data_click)
		})
	}, n.fn.itskillLayer = function(e) {
		var t = {},
			a = {
				id : "itskill",
				text_id : "itskill_text",
				code_id : "itskill_code",
				under_id : "itskill_under",
				layer_id : "itskill_layer_id",
				data : itskill,
				data_navigation : aItskillN,
				init_class : "panel_ct2 con_m",
				data_type : "itskill"
			};
		return this.each(function() {
			e && n.extend(t, i, a, e), t = jQuery.commonLayer.init(t), n(this).bind("click", t, t.data_click)
		})
	}, n.fn.majorLayer = function(e) {
		var t = {},
			a = {
				id : "major",
				text_id : "major_text",
				code_id : "major_code",
				under_id : "major_under",
				layer_id : "major_layer_id",
				data : major,
				data_map : oMajorM,
				data_navigation : aMajorN,
				data_type : "major"
			};
		return this.each(function() {
			e && n.extend(t, i, a, e), t = jQuery.commonLayer.init(t), n(this).bind("click", t, t.data_click)
		})
	}, n.fn.areaLayer = function(e) {
		var t = {},
			a = {
				id : "area",
				text_id : "area_text",
				code_id : "area_code",
				under_id : "area_under",
				layer_id : "area_layer_id",
				data : area,
				data_length : "2",
				data_map : oAreaM,
				data_navigation : aAreaN,
				data_row_num : 7,
				special_type : "",
				init_class : "panel_ct con_m",
				show_ip_location : !1,
				data_type : "area"
			};
		return this.each(function() {
			switch (e && n.extend(t, i, a, e), (t = jQuery.commonLayer.init(t)).special_type) {
			case "1":
				t.getCenterRightCenterContent = o;
				break;case "2":
				t.getCenterRightCenterContent = r
			}
			t.show_ip_location && (t.layer_before_open = function() {}, t.layer_after_open = c), n(this).bind("click", t, t.data_click)
		});
		function o(e, t) {
			switch (t) {
			case "360000":
				var a = '<div id="' + e.center_right_list + "_" + t + '" class="' + e.center_right_list + ' de d3">' + function(e, t) {
						var a = '<strong class="name">' + lang[e.data_type].layer_hot_country + "</strong><table><tbody>";
						return n.each([ "361001", "361002", "361003", "361004", "361005", "362001", "362002", "362003", "362004", "362005", "362019", "362020", "362021", "362022", "362023", "363001", "363002", "363004", "364001", "364002", "364012", "365001", "365002" ], function(t, n) {
								0 == t % e.data_row_num && (a += "<tr>"), a += '<td class="js_more"><em id="' + e.center_right_list_category + "_" + n + '" data-value="' + n + '" class="' + jQuery.commonLayer.getSelectedClass(e, n) + '">' + e.data[n] + "</em></td>", e.data_row_num - 1 == t % e.data_row_num && (a += "</tr>")
							}), a += "</tbody></table>"
					}(e) + '<strong class="name">' + lang[e.data_type].layer_continents + "</strong><table><tbody>";
				n.each(jQuery.commonLayer.getBigCategoryByNavigation(e, t), function(n, i) {
					0 == n % e.data_row_num && (a += "<tr>"), a += '<td class="js_more"><em id="' + e.center_right_list_category + "_" + t + "_" + i + '" data-value="' + i + '" class="' + jQuery.commonLayer.getSelectedClass(e, i) + '">' + e.data[i] + "</em></td>", e.data_row_num - 1 == n % e.data_row_num && (a += "</tr>")
				}), a += "</tbody></table></div>";
				break;default:
				a = jQuery.commonLayer.getCenterRightCenterContent(e, t)
			}
			return a
		}
		function r(e, t) {
			switch (t) {
			case "000000":
				var a = '<div id="' + e.center_right_list + "_" + t + '" class="' + e.center_right_list + ' de d3"><table><tbody>';
				n.each(jQuery.commonLayer.getBigCategoryByNavigation(e, t), function(n, i) {
					0 == n % e.data_row_num && (a += "<tr>"), a += '<td class="js_more"><em id="' + e.center_right_list_category + "_" + t + "_" + i + '" data-value="' + i + '" data-navigation="' + t + '" class="' + jQuery.commonLayer.getSelectedClass(e, i) + '">' + e.data[i] + "</em></td>", e.data_row_num - 1 == n % e.data_row_num && (a += "</tr>")
				}), a += '</tbody></table></div><div id="work_position_special_area_zhusanjiao" class="de dn"><table><tbody><tr><td class="js_more"><em id="' + e.center_right_list_category + "_" + t + '_01" data-value="01" class="' + jQuery.commonLayer.getSelectedClass(e, "01") + '">' + e.data["01"] + '</em><i class="c_666">' + lang[e.data_type].layer_special + "</i></td></tr></tbody></table></div>";
				break;default:
				a = jQuery.commonLayer.getCenterRightCenterContent(e, t)
			}
			return a
		}
		function c(e) {
			if (0 == n("#" + e.id + "_ip_location").length) {
				var t = "undefined" == typeof window.cfg || "undefined" == typeof window.cfg.domain || "undefined" == typeof window.cfg.domain.i ? "//i.51job.com" : window.cfg.domain.i;
				n.getJSON(t + "/userset/ajax/getClientAreaByIp.php?rand=" + Math.random() + "&jsoncallback=?", {}, function(t) {
					if ("000000" != t.jobareacode) {
						t.jobareacode = "36" == t.jobareacode.substring(0, 2) ? "360000" : t.jobareacode, t.jobareacode = t.jobareacode.substring(0, 4) + "00", n.inArray(t.jobareacode.substring(0, 2) + "0000", jQuery.commonSelect.sMunicipalityArea.split(",")) > -1 && (t.jobareacode = t.jobareacode.substring(0, 2) + "0000");
						var a = -1 != n.inArray(t.jobareacode, jQuery.commonSelect.oCurrentSelected.area),
							i = '<div class="dtit" name="location_relate_div">当前定位城市</div>';
						i += '<div class="de d1" id="' + e.id + '_ip_location" name="location_relate_div"><table><tbody><tr><td><em id="' + e.id + "_ip_location_000000_" + t.jobareacode + '" data-value="' + t.jobareacode + '" ' + (a ? 'class="on"' : "") + ">" + e.data[t.jobareacode] + "</em></td></tr></tbody></table></div>", i += '<div class="dtit" name="location_relate_div">热门城市</div>', n("#" + e.center_right).prepend(i), e.data_multiple && (n("#" + e.multiple_selected).find(".ttag").bind("click", e, jQuery.commonLayer.deleteSelectEvent), n("#" + e.bottom_save).bind("click", e, jQuery.commonLayer.saveEvent)), n("#" + e.center_left).find("li").bind("click", e, jQuery.commonLayer.showCenterRightCenterEvent), n("#" + e.center_left).find("li").bind("click", function() {
							"000000" == n(this).attr("data-value") ? n("div[name='location_relate_div']").show() : n("div[name='location_relate_div']").hide()
						}), n("#" + e.center_right).find("td em").bind("click", e, jQuery.commonLayer.getSelectEvent), n("." + e.close).bind("click", e, jQuery.commonLayer.closeEvent)
					} else e.data_multiple && (n("#" + e.multiple_selected).find(".ttag").bind("click", e, jQuery.commonLayer.deleteSelectEvent), n("#" + e.bottom_save).bind("click", e, jQuery.commonLayer.saveEvent)), n("#" + e.center_left).find("li").bind("click", e, jQuery.commonLayer.showCenterRightCenterEvent), n("#" + e.center_right).find("td em").bind("click", e, jQuery.commonLayer.getSelectEvent), n("." + e.close).bind("click", e, jQuery.commonLayer.closeEvent)
				})
			}
		}
	}
}, function(e, t, a) {
	"use strict";window.aFTN = [ {
		c : "计算机/互联网/通信/电子",
		e : "Computer,Internet,Telecom,Electronics",
		nav : "0100",
		category : [ "0100", "2400", "2500", "6100", "2600", "2700", "2800", "2900" ]
	}, {
		c : "销售/客服/技术支持",
		e : "Sales,Customer Service,Technical Support",
		nav : "0200",
		category : [ "0200", "3000", "3100", "3200" ]
	}, {
		c : "会计/金融/银行/保险",
		e : "Accounting,Finance,Banking,Insurance",
		nav : "0400",
		category : [ "0400", "3300", "2200", "3400" ]
	}, {
		c : "生产/营运/采购/物流",
		e : "Manufacturing,Operation,Purchasing,Logistics",
		nav : "3500",
		category : [ "3500", "3600", "0500", "5400", "3700", "6200", "3800", "6300", "3900", "4000", "0800", "5900" ]
	}, {
		c : "生物/制药/医疗/护理",
		e : "Biotechnology,Pharmaceuticals,Healthcare",
		nav : "4100",
		category : [ "4100", "5500", "1300" ]
	}, {
		c : "广告/市场/媒体/艺术",
		e : "Advertising,Marketing,Media,Design",
		nav : "4200",
		category : [ "4200", "4300", "0300", "4400", "4500", "0900" ]
	}, {
		c : "建筑/房地产",
		e : "Construction,Real Estate",
		nav : "2100",
		category : [ "2100", "4600", "4700", "6000" ]
	}, {
		c : "人事/行政/高级管理",
		e : "HR,Admin.,Senior Management",
		nav : "0600",
		category : [ "0600", "0700", "2300" ]
	}, {
		c : "咨询/法律/教育/科研",
		e : "Consultant,Legal,Education",
		nav : "1400",
		category : [ "1400", "1100", "1200", "5700", "1000" ]
	}, {
		c : "服务业",
		e : "Service",
		nav : "4800",
		category : [ "4800", "4900", "5000", "6400", "6500", "5100", "1800", "5200" ]
	}, {
		c : "公务员/翻译/其他",
		e : "Official,Translator,Others",
		nav : "1500",
		category : [ "1500", "2000", "1600", "1700", "5300", "1900", "5600", "5800" ]
	} ], window.aITN = [ {
		c : "计算机/互联网/通信/电子",
		e : "Computer,Internet,Telecom,Electronics",
		nav : "01",
		category : [ "01", "37", "38", "31", "39", "32", "40", "02", "35" ]
	}, {
		c : "会计/金融/银行/保险",
		e : "Accounting,Finance,Banking,Insurance",
		nav : "41",
		category : [ "41", "03", "42", "43", "62" ]
	}, {
		c : "贸易/消费/制造/营运",
		e : "Trade,Sales,Manufacturing,Operations",
		nav : "04",
		category : [ "04", "22", "05", "06", "44", "60", "45", "14", "33" ]
	}, {
		c : "制药/医疗",
		e : "Pharmaceuticals,Healthcare",
		nav : "08",
		category : [ "08", "46", "47" ]
	}, {
		c : "广告/媒体",
		e : "Advertising,Media Related",
		nav : "12",
		category : [ "12", "48", "49", "13", "15" ]
	}, {
		c : "房地产/建筑",
		e : "Real Estates Related",
		nav : "26",
		category : [ "26", "09", "50", "51" ]
	}, {
		c : "专业服务/教育/培训",
		e : "Professional Services,Education,Training",
		nav : "34",
		category : [ "34", "07", "59", "52", "18", "23", "24", "63" ]
	}, {
		c : "服务业",
		e : "Customer Services",
		nav : "11",
		category : [ "11", "53", "17", "54", "27" ]
	}, {
		c : "物流/运输",
		e : "Logistics,Transportation",
		nav : "21",
		category : [ "21", "55" ]
	}, {
		c : "能源/原材料",
		e : "Utilities and Raw Materials Related",
		nav : "19",
		category : [ "19", "16", "36", "61", "56" ]
	}, {
		c : "政府/非营利组织/其他",
		e : "Government,Non Profit,Others",
		nav : "28",
		category : [ "28", "57", "20", "29", "58" ]
	} ];window.aItskillN = [ {
		c : "大数据类",
		e : "Big Data",
		nav : "0200",
		category : [ "0212", "0202", "0205", "0206", "0213", "0207", "0210", "0209", "0218", "0220", "0214", "0211", "0208", "0219", "0215", "0216", "0217" ]
	}, {
		c : "开发编程类",
		e : "Program",
		nav : "0400",
		category : [ "0401", "0402", "0403", "0404", "0405", "0406", "0407", "0408", "0409", "0410", "0411", "0412", "0413", "0414", "0415", "0416", "0417", "0418", "0419", "0420", "0421", "0422", "0426", "0423", "0424" ]
	}, {
		c : "多媒体设计类",
		e : "Multimedia Design",
		nav : "1300",
		category : [ "1318", "1319", "1341", "1342", "1302", "1303", "1316", "1317", "1304", "1326", "1327", "1307", "1329", "1330", "1332", "1311", "1301" ]
	}, {
		c : "办公应用软件",
		e : "Office",
		nav : "2100",
		category : [ "2101", "2109", "2104", "2106", "2107", "2103", "2102" ]
	}, {
		c : "语言类",
		e : "Language",
		nav : "2200",
		category : [ "2201", "2202", "2205", "2208", "2203", "2204", "2206", "2211", "2212", "2207", "2210", "2213", "2214", "2215", "2209" ]
	}, {
		c : "财务管理类",
		e : "Financial Management",
		nav : "2300",
		category : [ "2303", "2301", "2302" ]
	} ], window.aMajorN = [ {
		c : "哲学",
		e : "Philosophy",
		nav : "1100",
		category : [ "1100" ]
	}, {
		c : "经济学",
		e : "Economics",
		nav : "1000",
		category : [ "1000" ]
	}, {
		c : "管理学",
		e : "Management",
		nav : "0200",
		category : [ "0200", "0300", "0400", "3500" ]
	}, {
		c : "文学",
		e : "Literature",
		nav : "0700",
		category : [ "0700", "3900", "1200" ]
	}, {
		c : "工学",
		e : "Engineering",
		nav : "3600",
		category : [ "3600", "3700", "0500", "0600", "1900", "2100", "2200", "2300", "2400", "2500", "2600", "2700", "2900", "2800", "3000", "3200", "4100", "4200" ]
	}, {
		c : "法学",
		e : "Law",
		nav : "0900",
		category : [ "0900" ]
	}, {
		c : "历史学",
		e : "History",
		nav : "1300",
		category : [ "1300" ]
	}, {
		c : "理学",
		e : "Science",
		nav : "1400",
		category : [ "1400", "1500", "1600", "3100", "1700", "1800", "0100", "3800", "2000" ]
	}, {
		c : "教育学",
		e : "Education",
		nav : "0800",
		category : [ "0800" ]
	}, {
		c : "医学",
		e : "Medicine",
		nav : "3400",
		category : [ "3400", "4000" ]
	}, {
		c : "农学",
		e : "Agriculture",
		nav : "3300",
		category : [ "3300" ]
	} ], window.aBaseArea = [ {
		c : "热门城市",
		e : "Hot City",
		nav : "000000",
		category : [ "010000", "020000", "030200", "040000", "180200", "200200", "080200", "070200", "090200", "060000", "030800", "230300", "230200", "070300", "250200", "190200", "150200", "080300", "170200", "050000", "120300", "120200", "220200", "240200", "110200" ]
	}, {
		c : "A B C",
		e : "A B C",
		nav : "092200",
		category : [ "092200", "310600", "310900", "281500", "311300", "300800", "230400", "201000", "150400", "260500", "170900", "280900", "311800", "092000", "241000", "101800", "240900", "270800", "141100", "150600", "280400", "160400", "251200", "101700", "200400", "140500", "010000", "231000", "260700", "121500", "311900", "151800", "160800", "300600", "311200", "101900", "190700", "070700", "070500", "240200", "190200", "210600", "231400", "032000", "190900", "090200", "101300", "161000", "151500", "280300", "141400", "150900", "251700", "060000" ]
	}, {
		c : "D E F G",
		e : "D E F G",
		nav : "091700",
		category : [ "091700", "250500", "230300", "220500", "210400", "221400", "230800", "072100", "251600", "090600", "121300", "172000", "252000", "101100", "271100", "100900", "121000", "030800", "100800", "280800", "181000", "181800", "140800", "030600", "110200", "230600", "131100", "231500", "150700", "271500", "092100", "130800", "290600", "091300", "091600", "030200", "140300", "141000", "260200", "320800" ]
	}, {
		c : "H I",
		e : "H I",
		nav : "220200",
		category : [ "220200", "310700", "320500", "320300", "100200", "320700", "081600", "320400", "160700", "200900", "080200", "121400", "311600", "150200", "141200", "032100", "171700", "221000", "141500", "221200", "161200", "190500", "251000", "280200", "281100", "230900", "080900", "191100", "071900", "151700", "151100", "181100", "320600", "151000", "180400", "030300" ]
	}, {
		c : "J K",
		e : "J K",
		nav : "220900",
		category : [ "220900", "130900", "240300", "120200", "120900", "171900", "080700", "270400", "220800", "031500", "170500", "032200", "270300", "080600", "230700", "210700", "211000", "180800", "180700", "130400", "072500", "130300", "270500", "310400", "170400", "032700", "310300", "311700", "250200", "070600" ]
	}, {
		c : "L M N",
		e : "L M N",
		nav : "300200",
		category : [ "300200", "121800", "141300", "270200", "160300", "090400", "250600", "081000", "071200", "092300", "121700", "231100", "240400", "300400", "251800", "210500", "101400", "271400", "120800", "102100", "140400", "151200", "260400", "111000", "271200", "191200", "211200", "170300", "090500", "171500", "150500", "032300", "032600", "091200", "090300", "220700", "300700", "130200", "091100", "070200", "140200", "110800", "070900", "170600", "090900", "080300", "110900", "251900" ]
	}, {
		c : "O P Q R",
		e : "O P Q R",
		nav : "091000",
		category : [ "091000", "231300", "130500", "171000", "271000", "110600", "251100", "171600", "221300", "220600", "260900", "261000", "260800", "181500", "140900", "160600", "120300", "031900", "271300", "100600", "101600", "250300", "110400", "081200", "300300", "121200" ]
	}, {
		c : "S T U",
		e : "S T U",
		nav : "171800",
		category : [ "171800", "110700", "101500", "100300", "300500", "030400", "032400", "201100", "171300", "020000", "131200", "031400", "191000", "080500", "040000", "181700", "230200", "180600", "310800", "160200", "290500", "221100", "210900", "240600", "240700", "070300", "072000", "151600", "181200", "220400", "091500", "311500", "080800", "121100", "072300", "071800", "071600", "210200", "160500", "050000", "181600", "270600", "231200", "240500", "280700", "200500", "150800", "260600", "311100", "311400", "101200" ]
	}, {
		c : "V W X",
		e : "V W X",
		nav : "100700",
		category : [ "100700", "120600", "120500", "200700", "080400", "100500", "251400", "281000", "281200", "310200", "070400", "150300", "140700", "290300", "180200", "270700", "311000", "101000", "200200", "091900", "320200", "251500", "281400", "110300", "181400", "181300", "200300", "180500", "190400", "191500", "180900", "170700", "130600", "211100", "171200", "281300", "161100", "160100", "071100", "171100", "151400" ]
	}, {
		c : "Y Z",
		e : "Y Z",
		nav : "102000",
		category : [ "102000", "091800", "120400", "071300", "200600", "241100", "240800", "161300", "201200", "070800", "100400", "032800", "210800", "220300", "310500", "090700", "180300", "131000", "081400", "190800", "290200", "130700", "230500", "191300", "200800", "140600", "320900", "250400", "190600", "032900", "210300", "121600", "031700", "110500", "071400", "191400", "160900", "270900", "251300", "031800", "071000", "170200", "030700", "290400", "081100", "170800", "030500", "190300", "171400", "091400", "120700", "090800", "260300" ]
	}, {
		c : "所有省份(含港澳台)",
		e : "All Provinces",
		nav : "030000",
		category : [ "030000", "070000", "080000", "090000", "100000", "110000", "120000", "130000", "140000", "150000", "160000", "170000", "180000", "190000", "200000", "210000", "220000", "230000", "240000", "250000", "260000", "270000", "280000", "290000", "300000", "310000", "320000", "330000", "340000", "350000" ]
	} ], window.aAreaN = aBaseArea.slice(0), window.aAreaN.push({
		c : "国外",
		e : "Overseas",
		nav : "360000",
		category : [ "360000" ]
	}), window.aCountryN = aBaseArea.slice(0), window.aCountryN.push({
		c : "国外",
		e : "Overseas",
		nav : "360000",
		category : [ "361000", "362000", "363000", "364000", "365000", "366000" ]
	})
}, function(e, t, a) {
	"use strict";
	var n,
		i;
	n = jQuery, i = {
		id : "association",
		text_id : "association_text",
		code_id : "association_code",
		under_id : "association_under",
		append_id : "association_append",
		association_id : "association_id",
		float_index_id : "association_float_index",
		float_on_id : "association_float_on",
		save_type : "1",
		save_text_type : "1",
		save_under_text_type : "1",
		save_code_type : "1",
		keyup_fn : "",
		append_fn : "",
		layer_append_type : "1",
		association_type : "1",
		data : "",
		data_struct_type : "1",
		data_child_depth : "2",
		data_multiple : !1,
		data_multiple_max : 5,
		data_multiple_min : 0,
		data_view_type : "1",
		data_type : "",
		data_parent_click : !0,
		data_add_error_alert : !0,
		data_clear : !0,
		recommend : !1,
		recommend_type : "1",
		recommend_click_fn : "",
		data_recommend : "",
		data_recommend_struct_type : "1",
		before_open : "",
		after_close : "",
		selected_class : "on",
		init_class : "udbox",
		init_sub_class : "ul",
		language : "c",
		self_define_text_id : "self_define_text_id",
		init_selfdefine_class : "li diy",
		self_define : "0",
		self_define_settings : [],
		max_self_define_length : 50
	}, n.fn.areaAssociation = function(e) {
		var t = {},
			a = {
				id : "area_association",
				text_id : "area_association_text",
				code_id : "area_association_code",
				under_id : "area_association_under",
				association_id : "area_association_id",
				data : area,
				data_length : "2",
				data_child_depth : "3",
				data_child_type : "1",
				data_type : "area"
			};
		return this.each(function() {
			switch (e && n.extend(t, i, a, e), (t = jQuery.commonAssociation.init(t)).data_child_type) {
			case "1":
				var r = {};
				n.each(t.data, function(e, t) {
					var a = e.substr(0, 4) + "00";
					-1 == jQuery.commonSelect.sForeignArea.indexOf(a) && -1 == jQuery.commonSelect.sPecialArea.indexOf(e) && (r[e] = t)
				}), t.data = r;
				break;case "2":
				r = {}, n.each(t.data, function(e, t) {
					if ("00" == e.substr(4, 2)) {
						var a = e.substr(0, 2) + "0000";
						-1 != jQuery.commonSelect.sMunicipalityArea.indexOf(a) ? e == a && (r[e] = t) : r[e] = t
					} else a = e.substr(0, 4) + "00", -1 != jQuery.commonSelect.sForeignArea.indexOf(a) && (r[e] = t)
				}), t.data = r;
				break;case "3":
				r = {}, n.each(t.data, function(e, t) {
					if ("00" == e.substr(e.length - 2, 2)) {
						var a = e.substr(0, 2) + "0000",
							n = e.substr(0, 4) + "00";
						-1 != jQuery.commonSelect.sMunicipalityArea.indexOf(a) ? e == a && (r[e] = t) : -1 == jQuery.commonSelect.sForeignArea.indexOf(n) && (r[e] = t)
					} else -1 != jQuery.commonSelect.sPecialArea.indexOf(e) && (r[e] = t)
				}), t.data = r
			}
			t.getAssociationContent = o, n("#" + t.text_id).bind("keyup", t, t.keyup_fn), n("#" + t.text_id).bind("click", t, t.keyup_fn)
		});
		function o(e, t) {
			var a = "";
			return n.each(t, function(t, i) {
					a += '<span data-value="' + t + '" class="li ' + e.association_each_click + '">' + function(e, t, a) {
							var i = [];
							return a.unshift(t), n.each(a, function(t, a) {
									i.push(e.data[a])
								}), i.join(jQuery.commonSelect.oSaveCodeTypeSplit[e.save_code_type])
						}(e, t, i) + "</span>"
				}), a
		}
	}, n.fn.indtypeAssociation = function(e) {
		var t = {},
			a = {
				id : "indtype_association",
				text_id : "indtype_association_text",
				code_id : "indtype_association_code",
				under_id : "indtype_association_under",
				association_id : "indtype_association_id",
				data : it,
				data_child_depth : "1",
				data_view_type : "1",
				data_type : "indtype"
			};
		return this.each(function() {
			e && n.extend(t, i, a, e), t = jQuery.commonAssociation.init(t), n("#" + t.text_id).bind("keyup", t, t.keyup_fn), n("#" + t.text_id).bind("click", t, t.keyup_fn)
		})
	}, n.fn.funtypeAssociation = function(e) {
		var t = {},
			a = {
				id : "funtype_association",
				text_id : "funtype_association_text",
				code_id : "funtype_association_code",
				under_id : "funtype_association_under",
				association_id : "funtype_association_id",
				data : ft,
				data_view_type : "2",
				init_class : "udbox",
				init_sub_class : "ul u3",
				data_type : "funtype"
			};
		return this.each(function() {
			e && n.extend(t, i, a, e), t = jQuery.commonAssociation.init(t), n("#" + t.text_id).bind("keyup", t, t.keyup_fn), n("#" + t.text_id).bind("click", t, t.keyup_fn)
		})
	}, n.fn.majorAssociation = function(e) {
		var t = {},
			a = {
				id : "major_association",
				text_id : "major_association_text",
				code_id : "major_association_code",
				under_id : "major_association_under",
				association_id : "major_association_id",
				data : major,
				self_define_data : [],
				data_view_type : "2",
				init_class : "udbox",
				init_sub_class : "ul u3",
				data_type : "major"
			};
		return this.each(function() {
			e && n.extend(t, i, a, e), "1" == t.self_define && 0 == t.self_define_data.length && n.each(oMajorM, function(e, a) {
				t.self_define_data.push(e)
			}), t.getSelfDefineDivCode = o, t.saveSelfDefine = r, t = jQuery.commonAssociation.init(t), n("#" + t.text_id).bind("keyup", t, t.keyup_fn), n("#" + t.text_id).bind("click", t, t.keyup_fn)
		});
		function o(e) {
			var t = '<div class="panel_lnp panel_py panel_ct2 Fm" id="' + e.self_define_text_id + '_selfdefine_div"><h2><p>' + lang.layer.self_define + lang[e.data_type].layer_name + '</p><a class="layer_close" href="javascript:void(0);"><i></i></a></h2><div class="panel_celt clearfix"><div class="celt"><div class="tit">' + lang[e.data_type].self_define_step1 + '</div><div class="tin clearfix">',
				a = !1;
			return n.each(e.self_define_data, function(i, o) {
					n("#" + e.code_id).val() == o && (a = !0), t += '<span class="ttag ' + e.association_each_click + (n("#" + e.code_id).val() == o ? " on" : "") + '" data-value="' + o + '">' + major[o] + "</span>"
				}), t += '</div></div><div class="celt"><div class="tit">' + lang[e.data_type].self_define_step2 + '</div><div class="txt"><input class="ef cursor" type="text" placeholder="' + lang.self_define.self_define_placeholder1 + ("c" == e.language ? e.max_self_define_length / 2 : e.max_self_define_length) + lang.self_define.self_define_placeholder2 + '" id="' + e.self_define_text_id + '_selfdefine_input" maxlength="' + e.max_self_define_length + '" value="' + n("#" + e.self_define_text_id).val() + '"><input type="hidden" id="' + e.self_define_text_id + '_selfdefine_code" value="' + (a ? n("#" + e.code_id).val() : "") + '"></div></div><span class="err" id="' + e.self_define_text_id + '_selfdefine_error"></span></div><div class="but_box b2"><span class="p_but" id="' + e.self_define_text_id + '_selfdefine_button">' + lang.layer.save + "</span></div></div>"
		}
		function r(e) {
			e.stopPropagation();var t = e.data;
			"" != n.trim(n("#" + t.self_define_text_id + "_selfdefine_code").val()) ? "" != n.trim(n("#" + t.self_define_text_id + "_selfdefine_input").val()) ? jQuery.commonAssociation.strlength(n("#" + t.self_define_text_id + "_selfdefine_input").val()) > t.max_self_define_length ? n("#" + t.self_define_text_id + "_selfdefine_error").text(lang.self_define.self_define_error_maxlength1 + ("c" == t.language ? t.max_self_define_length / 2 : t.max_self_define_length) + lang.self_define.self_define_error_maxlength2).show() : (jQuery.FLayer.close(t.self_define_settings), n("#" + t.text_id).val(n("#" + t.self_define_text_id + "_selfdefine_input").val()), n("#" + t.text_id).attr("pre_value", n("#" + t.self_define_text_id + "_selfdefine_input").val()), n("#" + t.self_define_text_id).val(n("#" + t.self_define_text_id + "_selfdefine_input").val()), n("#" + t.self_define_text_id).attr("pre_value", n("#" + t.self_define_text_id + "_selfdefine_input").val()), n("#" + t.code_id).val(n("#" + t.self_define_text_id + "_selfdefine_code").val()), n("#" + t.code_id).attr("pre_code", n("#" + t.self_define_text_id + "_selfdefine_code").val())) : n("#" + t.self_define_text_id + "_selfdefine_error").text(lang[t.data_type].self_define_error2).show() : n("#" + t.self_define_text_id + "_selfdefine_error").text(lang[t.data_type].self_define_error1).show()
		}
	}, n.fn.itskillAssociation = function(e) {
		var t = {},
			a = {
				id : "itskill_association",
				text_id : "itskill_association_text",
				code_id : "itskill_association_code",
				under_id : "itskill_association_under",
				association_id : "itskill_association_id",
				data : itskill,
				data_view_type : "2",
				init_class : "udbox",
				init_sub_class : "ul u3",
				data_type : "itskill"
			};
		return this.each(function() {
			e && n.extend(t, i, a, e), t = jQuery.commonAssociation.init(t), n("#" + t.text_id).bind("keyup", t, t.keyup_fn), n("#" + t.text_id).bind("click", t, t.keyup_fn)
		})
	}, n.fn.certAssociation = function(e) {
		var t = {},
			a = {
				id : "cert_association",
				text_id : "cert_association_text",
				code_id : "cert_association_code",
				under_id : "cert_association_under",
				association_id : "cert_association_id",
				data : cert,
				data_view_type : "2",
				init_class : "udbox",
				init_sub_class : "ul u3",
				data_type : "cert"
			};
		return this.each(function() {
			e && n.extend(t, i, a, e), t = jQuery.commonAssociation.init(t), n("#" + t.text_id).bind("keyup", t, t.keyup_fn), n("#" + t.text_id).bind("click", t, t.keyup_fn)
		})
	}, n.fn.personKeyVendorsAssociation = function(e) {
		var t = {},
			a = {
				id : "person_key_vendors_association",
				text_id : "person_key_vendors_association_text",
				code_id : "person_key_vendors_association_code",
				under_id : "person_key_vendors_association_under",
				association_id : "person_key_vendors_association_id",
				append_id : "person_key_vendors_association_append",
				save_type : "2",
				save_code_type : "2",
				association_type : "2",
				data_struct_type : "2",
				data_multiple : !0,
				data_multiple_max : 10,
				keyup_fn : function(e) {
					e.stopPropagation();
					var t = e.data;
					if (t.upDownSelect(e)) {
						"function" == typeof closeAllFloatDiv && closeAllFloatDiv(n("#" + t.float_on_id), n("#" + t.float_index_id), n("#" + t.text_id));
						var a = n("#" + t.text_id).val(),
							i = / /g;
						32 == e.keyCode && i.test(a) && n("#" + t.text_id).val(a.replace(i, "")), jQuery.commonSelect.initCurrentSelected(t), t.oLayerSettings = jQuery.commonAssociation.initLayerSettings(t, {}), t.findData(t, a)
					}
				},
				append_fn : function(e) {
					e.stopPropagation();
					var t = e.data,
						a = n.trim(n("#" + t.text_id).val());
					jQuery.commonSelect.initCurrentSelected(t), t.oLayerSettings = jQuery.commonAssociation.initLayerSettings(t, {}), "" != a && jQuery.commonSelect.canAdd(t, a) && o(t, a) && jQuery.commonSelect.save(t, a, t.data_struct_type)
				},
				saveEvent : function(e) {
					e.stopPropagation();
					var t = e.data,
						a = n(this).attr("data-value");
					jQuery.commonSelect.canAdd(t, a) && o(t, a) && (aRepeatSelected = jQuery.commonSelect.getRepeatSelected(t, a), aRepeatSelected.length > 0 && n.each(aRepeatSelected, function(e, a) {
						jQuery.commonSelect.deleteSelect(t, n("#" + t.under_id + " [data-value=" + a + "]"))
					}), jQuery.commonSelect.save(t, a, t.data_struct_type), t.data_multiple || (n("#" + t.float_on_id).removeClass("on").attr("float-on", !1), n("#" + t.float_index_id).attr("float-index", !1).parents(".flboxwp,.ln,.c,.box").css("z-index", ""), t.oLayerSettings.oLayerElement.attr("layer_float_on", !1)))
				},
				data_type : "ResumeLabel",
				data_max_length : 24
			};
		return this.each(function() {
			e && n.extend(t, i, a, e), t = jQuery.commonAssociation.init(t), n("#" + t.text_id).bind("keyup", t, t.keyup_fn), n("#" + t.text_id).bind("click", t, t.keyup_fn), n("#" + t.append_id).bind("click", t, t.append_fn)
		});
		function o(e, t) {
			var a = !0;
			return t.replace(/[^\x00-\xff]/gi, "xx").length > e.data_max_length && (e.data_add_error_alert && alert(lang.int_keywords_maxlength), a = !1), a
		}
	}, n.fn.companyVendorsAssociation = function(e) {
		var t = {},
			a = {
				id : "company_vendors_association",
				text_id : "company_vendors_association_text",
				code_id : "company_vendors_association_code",
				under_id : "company_vendors_association_under",
				association_id : "company_vendors_association_id",
				association_type : "2",
				data_struct_type : "2",
				data_clear : !1,
				data_type : "Company"
			};
		return this.each(function() {
			e && n.extend(t, i, a, e), t = jQuery.commonAssociation.init(t), n("#" + t.text_id).bind("keyup", t, t.keyup_fn), n("#" + t.text_id).bind("click", t, t.keyup_fn)
		})
	}, n.fn.jobVendorsAssociation = function(e) {
		var t = {},
			a = {
				id : "job_vendors_association",
				text_id : "job_vendors_association_text",
				code_id : "job_vendors_association_code",
				under_id : "job_vendors_association_under",
				association_id : "job_vendors_association_id",
				association_type : "2",
				data_struct_type : "2",
				data_clear : !1,
				data_type : "Job"
			};
		return this.each(function() {
			e && n.extend(t, i, a, e), t = jQuery.commonAssociation.init(t), n("#" + t.text_id).bind("keyup", t, t.keyup_fn), n("#" + t.text_id).bind("click", t, t.keyup_fn)
		})
	}, n.fn.schoolVendorsAssociation = function(e) {
		var t = {},
			a = {
				id : "school_vendors_association",
				text_id : "school_vendors_association_text",
				code_id : "school_vendors_association_code",
				under_id : "school_vendors_association_under",
				association_id : "school_vendors_association_id",
				association_type : "2",
				data_struct_type : "2",
				data_clear : !1,
				data_type : "School"
			};
		return this.each(function() {
			e && n.extend(t, i, a, e), t = jQuery.commonAssociation.init(t), n("#" + t.text_id).bind("keyup", t, t.keyup_fn), n("#" + t.text_id).bind("click", t, t.keyup_fn)
		})
	}, n.fn.majorVendorsAssociation = function(e) {
		var t = {},
			a = {
				id : "major_vendors_association",
				text_id : "major_vendors_association_text",
				code_id : "major_vendors_association_code",
				under_id : "major_vendors_association_under",
				association_id : "major_vendors_association_id",
				association_type : "2",
				data_struct_type : "2",
				data_clear : !1,
				data_type : "Major"
			};
		return this.each(function() {
			e && n.extend(t, i, a, e), t = jQuery.commonAssociation.init(t), n("#" + t.text_id).bind("keyup", t, t.keyup_fn), n("#" + t.text_id).bind("click", t, t.keyup_fn)
		})
	}
}, function(e, t, a) {
	"use strict";$.extend({
		commonAssociation : {
			ParentCategory : {},
			ChildCategory : {},
			ChildChildCategory : {},
			init : function(e) {
				$.each([ "association_each", "parent_association_click", "association_each_click", "under_each" ], function(t, a) {
					e[a] = e.id + "_" + a
				});
				var t = {
					keyup_fn : jQuery.commonAssociation.associationEvent,
					recommend_click_fn : jQuery.commonAssociation.associationEvent,
					append_fn : jQuery.commonAssociation.appendEvent,
					before_open : jQuery.commonAssociation.beforeOpenEvent,
					after_close : jQuery.commonAssociation.afterCloseEvent,
					getAssociationLayer : jQuery.commonAssociation.getAssociationLayer,
					findData : jQuery.commonAssociation.findData,
					getFindAssociationData : jQuery.commonAssociation.getFindAssociationData,
					getFindVendorsAssociationData : jQuery.commonAssociation.getFindVendorsAssociationData,
					getFindVendorsRecommendData : jQuery.commonAssociation.getFindVendorsRecommendData,
					getFindContent : jQuery.commonAssociation.getFindContent,
					getAssociationContent : jQuery.commonAssociation.getAssociationContent,
					getNoDataContent : jQuery.commonAssociation.getNoDataContent,
					getSelfDefineContent : jQuery.commonAssociation.getSelfDefineContent,
					saveEvent : jQuery.commonAssociation.saveEvent,
					deleteSelect : jQuery.commonSelect.deleteSelect,
					upDownSelect : jQuery.commonAssociation.upDownEvent,
					showSelfDefineBox : jQuery.commonAssociation.showSelfDefineBox,
					getSelfDefineDivCode : jQuery.commonAssociation.getSelfDefineDivCode,
					saveSelfDefine : jQuery.commonAssociation.saveSelfDefine,
					saveSelfDefineStep1 : jQuery.commonSelect.saveSelfDefineStep1
				};
				return $.each(t, function(t, a) {
						"undefined" != typeof e[t] && "" != e[t] || (e[t] = a)
					}), e.ParentCategory = {}, e.ChildCategory = {}, e.ChildChildCategory = {}, jQuery.commonSelect.setClearDataAttr(e, "1"), "undefined" != typeof e.float_on_id && $("#" + e.float_on_id).attr("float-on", !1), e
			},
			associationEvent : function(e) {
				e.stopPropagation();
				var t = e.data;
				if (jQuery.commonAssociation.upDownEvent(e)) {
					"function" == typeof window.closeAllFloatDiv && closeAllFloatDiv($("#" + t.float_on_id), $("#" + t.float_index_id), $("#" + t.text_id));
					var a = $("#" + t.text_id),
						n = ($("#" + t.code_id), $.trim(a.val()));
					jQuery.commonSelect.setClearDataAttr(t, "2"), jQuery.commonSelect.initCurrentSelected(t), t.oLayerSettings = jQuery.commonAssociation.initLayerSettings(t, {}), t.findData(t, n)
				}
			},
			appendEvent : function(e) {
				e.stopPropagation();
				var t = e.data,
					a = $.trim($("#" + t.text_id).val());
				jQuery.commonSelect.initCurrentSelected(t), t.oLayerSettings = jQuery.commonAssociation.initLayerSettings(t, {}), "" != a && jQuery.commonSelect.canAdd(t, a) && jQuery.commonSelect.save(t, a, t.data_struct_type)
			},
			initLayerSettings : function(e, t) {
				var a = {};
				if ("undefined" == typeof e.oLayerSettings) {
					a = {
						layer_id : e.association_id,
						layer_class_name : e.init_class,
						layer_sub_class_name : e.init_sub_class,
						layer_type : "2",
						layer_z_index : 4,
						layer_append_type : e.layer_append_type,
						layer_bind_id : e.id,
						layer_offset : 0,
						layer_before_open : e.before_open,
						layer_after_close : e.after_close
					};
					a = jQuery.FLayer.init(a)
				} else
					a = e.oLayerSettings;
				return a.oLayerElement.attr("layer_float_on", !0), a
			},
			findData : function(e, t) {
				if (e.recommend && "" == t) switch (e.recommend_type) {
					case "1":
						e.getFindRecommendData(e, t);
						break;case "2":
						e.getFindVendorsRecommendData(e, t)
				}
				else if ("" != t) switch (e.association_type) {
					case "1":
						e.getFindAssociationData(e, t);
						break;case "2":
						e.getFindVendorsAssociationData(e, t)
				}
				else "" == t && e.oLayerSettings.oLayerElement.hide()
			},
			getFindRecommendData : function(e, t) {
				oFindData = e.data_recommend, e.getFindContent(e, oFindData, t)
			},
			getFindVendorsRecommendData : function(e, t) {},
			getFindAssociationData : function(e, t) {
				switch (e.data_child_depth) {
				case "1":
					0 == jQuery.commonSelect.getObjectKeys(e.ParentCategory).length && (e.ParentCategory = e.data);
					break;case "2":
					0 == jQuery.commonSelect.getObjectKeys(e.ParentCategory).length && $.each(e.data, function(t, a) {
						"00" == t.substr(2, 2) ? e.ParentCategory[t] = a : e.ChildCategory[t] = a
					});
					break;case "3":
					0 == jQuery.commonSelect.getObjectKeys(e.ParentCategory).length && $.each(e.data, function(t, a) {
						if ("0000" == t.substr(2, 4)) switch (e.data_child_type) {
							case "2":
								"360000" != t && (e.ParentCategory[t] = a);
								break;default:
								e.ParentCategory[t] = a
						}
						else
							"00" == t.substr(4, 2) ? e.ChildCategory[t] = a : e.ChildChildCategory[t] = a
					})
				}
				var a = {
						parent_category : [],
						child_category : [],
						childchild_category : []
					},
					n = t.toLowerCase();
				$.each(e.ParentCategory, function(e, t) {
					-1 != (t = t.toLowerCase()).indexOf(n) && -1 == a.parent_category.toString().indexOf(e) && a.parent_category.push(e)
				}), $.each(e.ChildCategory, function(e, t) {
					-1 != (t = t.toLowerCase()).indexOf(n) && -1 == a.child_category.toString().indexOf(e) && a.child_category.push(e)
				}), $.each(e.ChildChildCategory, function(e, t) {
					-1 != (t = t.toLowerCase()).indexOf(n) && -1 == a.childchild_category.toString().indexOf(e) && a.childchild_category.push(e)
				});
				var i = {},
					o = [];
				switch (e.data_child_depth) {
				case "1":
					$.each(a.parent_category, function(e, t) {
						i[t] = []
					});
					break;case "2":
					$.each(a.child_category, function(e, t) {
						if (-1 == o.toString().indexOf(t)) {
							var a = t.substr(0, 2) + "00";
							"undefined" == typeof i[a] && (i[a] = []), i[a].push(t)
						}
					});
					break;case "3":
					$.each(a.parent_category, function(e, t) {
						-1 == o.toString().indexOf(t) && "undefined" == typeof i[t] && (i[t] = [])
					}), $.each(a.child_category, function(e, t) {
						if (-1 == o.toString().indexOf(t)) {
							var a = t.substr(0, 2) + "0000";
							"undefined" == typeof i[t] && (i[t] = []), i[t].push(a)
						}
					}), $.each(a.childchild_category, function(e, t) {
						if (-1 == o.toString().indexOf(t)) {
							var a = t.substr(0, 4) + "00",
								n = t.substr(0, 2) + "0000";
							"undefined" == typeof i[t] && (i[t] = []), i[t].push(a), i[t].push(n)
						}
					})
				}
				e.getFindContent(e, i, t)
			},
			getFindVendorsAssociationData : function(e, t) {
				var a = {};
				$.ajax({
					url : "https://kwdsrv.51job.com/KwdSrvByKey/default.aspx",
					data : {
						kwd : t,
						src : e.data_type,
						rand : Math.random()
					},
					dataType : "jsonp",
					cache : !1,
					async : !1,
					timeout : 1e3,
					success : function(n, i, o) {
						"1" == n.message && "" != n.content && $.each(unescape(n.content).split("\t"), function(e, t) {
							a[e] = t
						}), e.getFindContent(e, a, t)
					},
					error : function(n, i, o) {
						e.getFindContent(e, a, t)
					}
				})
			},
			getFindContent : function(e, t, a) {
				var n = "";
				e.recommend && "" == a ? n = e.getRecommondContent(e) : jQuery.commonSelect.getObjectKeys(t).length > 0 && (n = e.getAssociationContent(e, t));
				var i = !1;
				"" == n && (n = e.getNoDataContent(e), i = !0), n = '<div class="' + e.init_sub_class + '">' + n + "</div>" + e.getSelfDefineContent(e), jQuery.FLayer.setContent(e.oLayerSettings, n), i || (jQuery.FLayer.setContent(e.oLayerSettings, n), e.recommend && "" == a ? $("#" + e.association_id).find("." + e.association_each_click).bind("click", e, e.saveRecommendEvent) : (e.data_parent_click && $("#" + e.association_id).find("." + e.parent_association_click).bind("click", e, e.saveEvent), $("#" + e.association_id).find("." + e.association_each_click).bind("click", e, e.saveEvent))), "1" == e.self_define && $("#" + e.self_define_text_id + "_selfdefine_click").bind("click", e, jQuery.commonAssociation.showSelfDefineBox), "1" != e.self_define && i || (jQuery.FLayer.open(e), $("#" + e.float_on_id).addClass("on").attr("float-on", !0).parents(".flboxwp,.ln,.c,.box").css("z-index", "4"), $("#" + e.float_index_id).attr("float-index", !0).css({
					"z-index" : 4
				}))
			},
			getRecommondContent : function(e) {
				var t = "";
				return t = '<span class="tl off"><span class="bg b_key">' + lang.layer.relation_keyword + "</span></span>", $.each(e.data_recommend, function(a, n) {
						var i = "",
							o = "";
						switch (e.data_recommend_struct_type) {
						case "1":
							o = a;
							break;case "2":
							o = n
						}
						e.data_multiple || o != jQuery.commonSelect.oCurrentSelected[e.data_type].toString() || (i = e.selected_class), t += '<span data-value="' + o + '" class="li ' + i + " " + e.association_each_click + '">' + o + "</span>"
					}), t
			},
			beforeOpenEvent : function(e) {},
			afterCloseEvent : function(e) {},
			getAssociationContent : function(e, t) {
				var a = "";
				return $.each(t, function(t, n) {
						switch (e.data_view_type) {
						case "1":
							switch (e.data_struct_type) {
							case "1":
								a += '<span data-value="' + t + '" class="li ' + e.association_each_click + '">' + e.data[t] + "</span>";
								break;case "2":
								a += '<span data-value="' + n + '" class="li ' + e.association_each_click + '">' + n + "</span>"
							}
							break;case "2":
							switch (e.data_struct_type) {
							case "1":
								e.data_parent_click ? a += '<span class="tl tlw c_333"><span id="' + e.association_each + "_" + t + '" data-value="' + t + '" class="' + e.parent_association_click + '">' + e.data[t] + "</span></span>" : a += '<span class="tl tlw off"><span id="' + e.association_each + "_" + t + '" data-value="' + t + '">' + e.data[t] + "</span></span>", $.each(n, function(t, n) {
									a += '<span id="' + e.association_each + "_" + n + '" data-value="' + n + '" class="li ' + e.association_each_click + '">' + e.data[n] + "</span>"
								})
							}
						}
					}), a
			},
			getNoDataContent : function(e) {
				return '<span class="li off">' + lang.layer.no_data + "</span>"
			},
			saveEvent : function(e) {
				e.stopPropagation();
				var t = e.data,
					a = $(this).attr("data-value");
				if (jQuery.commonSelect.canAdd(t, a)) {
					if (aRepeatSelected = jQuery.commonSelect.getRepeatSelected(t, a), aRepeatSelected.length > 0) switch (t.save_type) {
						case "1":
							$.each(aRepeatSelected, function(e, a) {
								jQuery.commonSelect.deleteSelect(t, a)
							});
							break;case "2":
							$.each(aRepeatSelected, function(e, a) {
								jQuery.commonSelect.deleteSelect(t, $("#" + t.under_id + " [data-value=" + a + "]"))
							})
					}
					jQuery.commonSelect.save(t, a, t.data_struct_type), t.data_multiple || ($("#" + t.float_on_id).removeClass("on").attr("float-on", !1), $("#" + t.float_index_id).attr("float-index", !1).parents(".flboxwp,.ln,.c,.box").css("z-index", ""), t.oLayerSettings.oLayerElement.attr("layer_float_on", !1))
				}
			},
			upDownEvent : function(e) {
				e.preventDefault();
				var t = e.data;
				if ("click" == e.type) return !0;
				var a = e.keyCode,
					n = $("#" + t.association_id),
					i = $("#" + t.association_id).find("span.on");
				switch (a) {
				case 38:
					return 0 == i.length ? (n.scrollTop(30 * n.children().length), $("#" + t.association_id).find("span:last").addClass("on")) : ((i.position().top < 0 || i.position().top > 180) && n.scrollTop(i.prev().position().top), 0 == i.prev().length ? (n.scrollTop(30 * n.children().length), i.removeClass("on"), $("#" + t.association_id).find("span:last").addClass("on")) : (i.prev().position().top < 0 && n.scrollTop(n.scrollTop() - 30), i.removeClass("on").prev().addClass("on"))), !1;case 40:
					return 0 == i.length ? (n.scrollTop(0), $("#" + t.association_id).find("span:first").addClass("on")) : 0 == i.next().length ? (n.scrollTop(0), i.removeClass("on"), $("#" + t.association_id).find("span:first").addClass("on")) : ((i.position().top < 0 || i.position().top > 180) && n.scrollTop(i.next().position().top), i.next().position().top > 180 && n.scrollTop(n.scrollTop() + 30), i.removeClass("on").next().addClass("on")), !1;case 13:
					if (0 == i.length) return;
					return i.hasClass("tl") ? i.children().click() : i.click(), !1;default:
					return !0
				}
			},
			showSelfDefineBox : function(e) {
				e.stopPropagation();
				var t = e.data;
				if (jQuery.FLayer.close(t), $(t.self_define_text_id + "_selfdefine_div").length > 0) $(t.self_define_text_id + "_selfdefine_div").show();else {
					oSelfDefineLayerSettings = jQuery.FLayer.init(), jQuery.FLayer.setContent(oSelfDefineLayerSettings, t.getSelfDefineDivCode(t)), $("#" + t.self_define_text_id + "_selfdefine_input").focus(function() {
						$(this).parent().addClass("focusinput")
					}).blur(function() {
						$(this).parent().removeClass("focusinput")
					}), "1" == t.self_define && ($("#" + t.self_define_text_id + "_selfdefine_input").val($("#" + t.text_id).val()), "undefined" != typeof t.self_define_data && 0 != t.self_define_data.length && $("#" + t.self_define_text_id + "_selfdefine_div").find("." + t.association_each_click).bind("click", t, t.saveSelfDefineStep1)), t.self_define_settings = oSelfDefineLayerSettings, $("#" + t.self_define_text_id + "_selfdefine_button").bind("click", t, t.saveSelfDefine), jQuery.FLayer.open(oSelfDefineLayerSettings);
					var a = $("#" + t.self_define_text_id + "_selfdefine_input"),
						n = a.val();
					a.val($("#" + t.text_id).val()), a.val(n), a.focus()
				}
			},
			getSelfDefineContent : function(e) {
				return sContent = "", "1" == e.self_define && (sContent = '<div class="' + e.init_selfdefine_class + '" id="' + e.self_define_text_id + '_selfdefine_click">' + lang[e.data_type].self_define_button + "</div>"), sContent
			},
			getSelfDefineDivCode : function(e) {
				return '<div class="panel_lnp panel_py Fm" id="' + e.self_define_text_id + '_selfdefine_div"><h2><p>' + lang.layer.self_define + lang[e.data_type].layer_name + '</p><a class="layer_close" href="javascript:void(0);"><i></i></a></h2><div class="pannel_con"><div class="gp8 clearfix"><div class="txt focusinput"><input class="ef cursor" type="text" placeholder="' + lang.self_define.self_define_placeholder1 + ("c" == e.language ? e.max_self_define_length / 2 : e.max_self_define_length) + lang.self_define.self_define_placeholder2 + '" id="' + e.self_define_text_id + '_selfdefine_input" maxlength="' + e.max_self_define_length + '" value="' + $("#" + e.self_define_text_id).val() + '"></div><div class="err" id="' + e.self_define_text_id + '_selfdefine_error"></div></div></div><div class="but_box b2"><span class="p_but" id="' + e.self_define_text_id + '_selfdefine_button">' + lang.layer.save + "</span></div></div>"
			},
			saveSelfDefine : function(e) {
				e.stopPropagation();
				var t = e.data;
				"" != $.trim($("#" + t.self_define_text_id + "_selfdefine_input").val()) ? jQuery.commonAssociation.strlength($("#" + t.self_define_text_id + "_selfdefine_input").val()) > t.max_self_define_length ? $("#" + t.self_define_text_id + "_selfdefine_error").text(lang.self_define.self_define_error_maxlength1 + ("c" == t.language ? t.max_self_define_length / 2 : t.max_self_define_length) + lang.self_define.self_define_error_maxlength2).show() : (jQuery.FLayer.close(t.self_define_settings), $("#" + t.text_id).val($("#" + t.self_define_text_id + "_selfdefine_input").val()), $("#" + t.text_id).attr("pre_value", $("#" + t.self_define_text_id + "_selfdefine_input").val()), $("#" + t.self_define_text_id).val($("#" + t.self_define_text_id + "_selfdefine_input").val()), $("#" + t.self_define_text_id).attr("pre_value", $("#" + t.self_define_text_id + "_selfdefine_input").val())) : $("#" + t.self_define_text_id + "_selfdefine_error").text(lang[t.data_type].self_define_error1).show()
			},
			strlength : function(e) {
				return e.replace(/[^\x00-\xff]/gi, "xx").length
			}
		}
	})
}, function(e, t, a) {
	"use strict";"undefined" == typeof window.lang && (window.lang = []), window.lang.funtype = {
		layer_name : "职能"
	}, window.lang.indtype = {
		layer_name : "行业"
	}, window.lang.cert = {
		layer_name : "证书",
		self_define_button : "若无合适选项，请自定义证书",
		self_define_error1 : "请填写证书名称"
	}, window.lang.itskill = {
		layer_name : "技能/语言",
		self_define_button : "若无合适选项，请自定义技能",
		self_define_error1 : "请填写技能名称"
	}, window.lang.area = {
		layer_name : "地区",
		layer_special : "（惠州、汕头、珠海、佛山、中山、江门、湛江、肇庆、清远）",
		layer_hot_country : "热门国家",
		layer_continents : "大洲"
	}, window.lang.major = {
		layer_name : "专业",
		self_define_button : "若无合适选项，请自定义专业",
		self_define_error1 : "请先选择专业方向",
		self_define_error2 : "请填写所学专业名称",
		self_define_step1 : "第1步：选择专业方向",
		self_define_step2 : "第2步：自定义专业"
	}, window.lang.layer = {
		data_max_select : "最多只能选择{max}项",
		save : "确定",
		cancel : "取消",
		all : "所有",
		no_data : "没有找到合适的结果",
		relation_keyword : "相关关键词",
		data_added : "你已经选择过该项了",
		select : "选择",
		self_define : "自定义"
	}, window.lang.self_define = {
		self_define_error_maxlength1 : "请控制在",
		self_define_error_maxlength2 : "个中文字以内",
		self_define_placeholder1 : "限",
		self_define_placeholder2 : "个中文"
	}
}, function(e, t, a) {
	"use strict";
	window.area = {
		"010000" : "北京",
		"010100" : "东城区",
		"010200" : "西城区",
		"010500" : "朝阳区",
		"010600" : "丰台区",
		"010700" : "石景山区",
		"010800" : "海淀区",
		"010900" : "门头沟区",
		"011000" : "房山区",
		"011100" : "通州区",
		"011200" : "顺义区",
		"011300" : "昌平区",
		"011400" : "大兴区",
		"011500" : "怀柔区",
		"011600" : "平谷区",
		"011700" : "密云区",
		"011800" : "延庆区",
		"020000" : "上海",
		"020100" : "黄浦区",
		"020300" : "徐汇区",
		"020400" : "长宁区",
		"020500" : "静安区",
		"020600" : "普陀区",
		"020800" : "虹口区",
		"020900" : "杨浦区",
		"021000" : "浦东新区",
		"021100" : "闵行区",
		"021200" : "宝山区",
		"021300" : "嘉定区",
		"021400" : "金山区",
		"021500" : "松江区",
		"021600" : "青浦区",
		"021800" : "奉贤区",
		"021900" : "崇明区",
		"030000" : "广东省",
		"030200" : "广州",
		"030201" : "越秀区",
		"030202" : "荔湾区",
		"030203" : "海珠区",
		"030204" : "天河区",
		"030205" : "白云区",
		"030206" : "黄埔区",
		"030207" : "番禺区",
		"030208" : "花都区",
		"030209" : "南沙区",
		"030211" : "增城",
		"030212" : "从化",
		"030300" : "惠州",
		"030400" : "汕头",
		"030500" : "珠海",
		"030501" : "香洲区",
		"030502" : "斗门区",
		"030503" : "金湾区",
		"030504" : "横琴新区",
		"030505" : "高栏港经济区",
		"030506" : "珠海高新区",
		"030507" : "珠海保税区",
		"030508" : "万山海洋开发试验区",
		"030600" : "佛山",
		"030601" : "禅城区",
		"030602" : "顺德区",
		"030603" : "南海区",
		"030604" : "三水区",
		"030605" : "高明区",
		"030700" : "中山",
		"030800" : "东莞",
		"030801" : "莞城区",
		"030802" : "南城区",
		"030803" : "东城区",
		"030804" : "万江区",
		"030805" : "石碣镇",
		"030806" : "石龙镇",
		"030807" : "茶山镇",
		"030808" : "石排镇",
		"030809" : "企石镇",
		"030810" : "横沥镇",
		"030811" : "桥头镇",
		"030812" : "谢岗镇",
		"030813" : "东坑镇",
		"030814" : "常平镇",
		"030815" : "寮步镇",
		"030816" : "大朗镇",
		"030817" : "麻涌镇",
		"030818" : "中堂镇",
		"030819" : "高埗镇",
		"030820" : "樟木头镇",
		"030821" : "大岭山镇",
		"030822" : "望牛墩镇",
		"030823" : "黄江镇",
		"030824" : "洪梅镇",
		"030825" : "清溪镇",
		"030826" : "沙田镇",
		"030827" : "道滘镇",
		"030828" : "塘厦镇",
		"030829" : "虎门镇",
		"030830" : "厚街镇",
		"030831" : "凤岗镇",
		"030832" : "长安镇",
		"030833" : "松山湖区",
		"031400" : "韶关",
		"031500" : "江门",
		"031700" : "湛江",
		"031800" : "肇庆",
		"031900" : "清远",
		"032000" : "潮州",
		"032100" : "河源",
		"032200" : "揭阳",
		"032300" : "茂名",
		"032400" : "汕尾",
		"032600" : "梅州",
		"032700" : "开平",
		"032800" : "阳江",
		"032900" : "云浮",
		"040000" : "深圳",
		"040100" : "福田区",
		"040200" : "罗湖区",
		"040300" : "南山区",
		"040400" : "盐田区",
		"040500" : "宝安区",
		"040600" : "龙岗区",
		"040700" : "光明新区",
		"040800" : "坪山区",
		"040900" : "大鹏新区",
		"041000" : "龙华新区",
		"050000" : "天津",
		"050100" : "和平区",
		"050200" : "河东区",
		"050300" : "河西区",
		"050400" : "南开区",
		"050500" : "河北区",
		"050600" : "红桥区",
		"050700" : "东丽区",
		"050800" : "西青区",
		"050900" : "津南区",
		"051000" : "北辰区",
		"051100" : "武清区",
		"051200" : "宝坻区",
		"051300" : "滨海新区",
		"051400" : "宁河区",
		"051500" : "静海区",
		"051600" : "蓟州区",
		"060000" : "重庆",
		"060100" : "渝中区",
		"060200" : "大渡口区",
		"060300" : "江北区",
		"060400" : "沙坪坝区",
		"060600" : "合川区",
		"060700" : "渝北区",
		"060800" : "永川区",
		"060900" : "巴南区",
		"061000" : "南川区",
		"061100" : "九龙坡区",
		"061200" : "万州区",
		"061300" : "涪陵区",
		"061400" : "黔江区",
		"061500" : "南岸区",
		"061600" : "北碚区",
		"061700" : "长寿区",
		"061900" : "江津区",
		"062000" : "綦江区",
		"062100" : "潼南区",
		"062200" : "铜梁区",
		"062300" : "大足区",
		"062400" : "荣昌区",
		"062500" : "璧山区",
		"062600" : "垫江县",
		"062700" : "丰都县",
		"062800" : "忠县",
		"062900" : "石柱县",
		"063000" : "城口县",
		"063100" : "彭水县",
		"063200" : "梁平区",
		"063300" : "酉阳县",
		"063400" : "开州区",
		"063500" : "秀山县",
		"063600" : "巫溪县",
		"063700" : "巫山县",
		"063800" : "奉节县",
		"063900" : "武隆区",
		"064000" : "云阳县",
		"070000" : "江苏省",
		"070200" : "南京",
		"070201" : "玄武区",
		"070203" : "秦淮区",
		"070204" : "建邺区",
		"070205" : "鼓楼区",
		"070207" : "浦口区",
		"070208" : "六合区",
		"070209" : "栖霞区",
		"070210" : "雨花台区",
		"070211" : "江宁区",
		"070212" : "溧水区",
		"070213" : "高淳区",
		"070300" : "苏州",
		"070301" : "姑苏区",
		"070303" : "吴中区",
		"070304" : "相城区",
		"070305" : "吴江区",
		"070306" : "工业园区",
		"070307" : "高新区",
		"070400" : "无锡",
		"070401" : "梁溪区",
		"070404" : "滨湖区",
		"070405" : "无锡新区",
		"070406" : "惠山区",
		"070407" : "锡山区",
		"070408" : "宜兴市",
		"070409" : "江阴市",
		"070500" : "常州",
		"070501" : "天宁区",
		"070502" : "钟楼区",
		"070504" : "新北区",
		"070505" : "武进区",
		"070506" : "金坛区",
		"070507" : "溧阳市",
		"070600" : "昆山",
		"070700" : "常熟",
		"070800" : "扬州",
		"070900" : "南通",
		"071000" : "镇江",
		"071100" : "徐州",
		"071200" : "连云港",
		"071300" : "盐城",
		"071400" : "张家港",
		"071600" : "太仓",
		"071800" : "泰州",
		"071900" : "淮安",
		"072000" : "宿迁",
		"072100" : "丹阳",
		"072300" : "泰兴",
		"072500" : "靖江",
		"080000" : "浙江省",
		"080200" : "杭州",
		"080201" : "拱墅区",
		"080202" : "上城区",
		"080203" : "下城区",
		"080204" : "江干区",
		"080205" : "西湖区",
		"080206" : "滨江区",
		"080207" : "余杭区",
		"080208" : "萧山区",
		"080209" : "临安区",
		"080210" : "富阳区",
		"080211" : "建德市",
		"080212" : "桐庐县",
		"080213" : "淳安县",
		"080300" : "宁波",
		"080301" : "海曙区",
		"080303" : "江北区",
		"080304" : "北仑区",
		"080305" : "镇海区",
		"080306" : "鄞州区",
		"080307" : "慈溪市",
		"080308" : "余姚市",
		"080309" : "奉化区",
		"080310" : "宁海县",
		"080311" : "象山县",
		"080312" : "高新区",
		"080400" : "温州",
		"080500" : "绍兴",
		"080600" : "金华",
		"080700" : "嘉兴",
		"080800" : "台州",
		"080900" : "湖州",
		"081000" : "丽水",
		"081100" : "舟山",
		"081200" : "衢州",
		"081400" : "义乌",
		"081600" : "海宁",
		"090000" : "四川省",
		"090200" : "成都",
		"090201" : "青羊区",
		"090202" : "锦江区",
		"090203" : "金牛区",
		"090204" : "武侯区",
		"090205" : "成华区",
		"090206" : "龙泉驿区",
		"090207" : "青白江区",
		"090208" : "新都区",
		"090209" : "温江区",
		"090210" : "都江堰市",
		"090211" : "彭州市",
		"090212" : "邛崃市",
		"090213" : "崇州市",
		"090214" : "金堂县",
		"090215" : "双流区",
		"090216" : "郫都区",
		"090217" : "大邑县",
		"090218" : "蒲江县",
		"090219" : "新津县",
		"090220" : "高新区",
		"090221" : "简阳市",
		"090300" : "绵阳",
		"090400" : "乐山",
		"090500" : "泸州",
		"090600" : "德阳",
		"090700" : "宜宾",
		"090800" : "自贡",
		"090900" : "内江",
		"091000" : "攀枝花",
		"091100" : "南充",
		"091200" : "眉山",
		"091300" : "广安",
		"091400" : "资阳",
		"091500" : "遂宁",
		"091600" : "广元",
		"091700" : "达州",
		"091800" : "雅安",
		"091900" : "西昌",
		"092000" : "巴中",
		"092100" : "甘孜",
		"092200" : "阿坝",
		"092300" : "凉山",
		100000 : "海南省",
		100200 : "海口",
		100300 : "三亚",
		100400 : "洋浦经济开发区",
		100500 : "文昌",
		100600 : "琼海",
		100700 : "万宁",
		100800 : "儋州",
		100900 : "东方",
		101000 : "五指山",
		101100 : "定安",
		101200 : "屯昌",
		101300 : "澄迈",
		101400 : "临高",
		101500 : "三沙",
		101600 : "琼中",
		101700 : "保亭",
		101800 : "白沙",
		101900 : "昌江",
		102000 : "乐东",
		102100 : "陵水",
		110000 : "福建省",
		110200 : "福州",
		110201 : "鼓楼区",
		110202 : "台江区",
		110203 : "仓山区",
		110204 : "马尾区",
		110205 : "晋安区",
		110206 : "闽侯县",
		110207 : "连江县",
		110208 : "罗源县",
		110209 : "闽清县",
		110210 : "永泰县",
		110211 : "平潭县",
		110212 : "福清市",
		110213 : "长乐市",
		110300 : "厦门",
		110400 : "泉州",
		110500 : "漳州",
		110600 : "莆田",
		110700 : "三明",
		110800 : "南平",
		110900 : "宁德",
		111000 : "龙岩",
		120000 : "山东省",
		120200 : "济南",
		120201 : "历下区",
		120202 : "市中区",
		120203 : "槐荫区",
		120204 : "天桥区",
		120205 : "历城区",
		120206 : "长清区",
		120207 : "平阴县",
		120208 : "济阳县",
		120209 : "商河县",
		120210 : "章丘区",
		120211 : "高新区",
		120300 : "青岛",
		120301 : "市南区",
		120302 : "市北区",
		120303 : "黄岛区",
		120304 : "崂山区",
		120305 : "城阳区",
		120306 : "李沧区",
		120307 : "胶州市",
		120308 : "即墨区",
		120309 : "平度市",
		120310 : "莱西市",
		120311 : "高新区",
		120400 : "烟台",
		120500 : "潍坊",
		120600 : "威海",
		120700 : "淄博",
		120800 : "临沂",
		120900 : "济宁",
		121000 : "东营",
		121100 : "泰安",
		121200 : "日照",
		121300 : "德州",
		121400 : "菏泽",
		121500 : "滨州",
		121600 : "枣庄",
		121700 : "聊城",
		121800 : "莱芜",
		130000 : "江西省",
		130200 : "南昌",
		130201 : "东湖区",
		130202 : "西湖区",
		130203 : "青云谱区",
		130204 : "湾里区",
		130205 : "青山湖区",
		130206 : "南昌县",
		130207 : "新建区",
		130208 : "安义县",
		130209 : "进贤县",
		130210 : "红谷滩新区",
		130300 : "九江",
		130400 : "景德镇",
		130500 : "萍乡",
		130600 : "新余",
		130700 : "鹰潭",
		130800 : "赣州",
		130900 : "吉安",
		131000 : "宜春",
		131100 : "抚州",
		131200 : "上饶",
		140000 : "广西",
		140200 : "南宁",
		140300 : "桂林",
		140400 : "柳州",
		140500 : "北海",
		140600 : "玉林",
		140700 : "梧州",
		140800 : "防城港",
		140900 : "钦州",
		141000 : "贵港",
		141100 : "百色",
		141200 : "河池",
		141300 : "来宾",
		141400 : "崇左",
		141500 : "贺州",
		150000 : "安徽省",
		150200 : "合肥",
		150201 : "瑶海区",
		150202 : "庐阳区",
		150203 : "蜀山区",
		150204 : "包河区",
		150205 : "经开区",
		150206 : "滨湖新区",
		150207 : "新站区",
		150208 : "高新区",
		150209 : "政务区",
		150210 : "北城新区",
		150211 : "巢湖市",
		150212 : "长丰县",
		150213 : "肥东县",
		150214 : "肥西县",
		150215 : "庐江县",
		150300 : "芜湖",
		150400 : "安庆",
		150500 : "马鞍山",
		150600 : "蚌埠",
		150700 : "阜阳",
		150800 : "铜陵",
		150900 : "滁州",
		151000 : "黄山",
		151100 : "淮南",
		151200 : "六安",
		151400 : "宣城",
		151500 : "池州",
		151600 : "宿州",
		151700 : "淮北",
		151800 : "亳州",
		160000 : "河北省",
		160100 : "雄安新区",
		160200 : "石家庄",
		160300 : "廊坊",
		160400 : "保定",
		160500 : "唐山",
		160600 : "秦皇岛",
		160700 : "邯郸",
		160800 : "沧州",
		160900 : "张家口",
		161000 : "承德",
		161100 : "邢台",
		161200 : "衡水",
		161300 : "燕郊开发区",
		170000 : "河南省",
		170200 : "郑州",
		170201 : "中原区",
		170202 : "二七区",
		170203 : "管城回族区",
		170204 : "金水区",
		170205 : "上街区",
		170206 : "惠济区",
		170207 : "中牟县",
		170208 : "巩义市",
		170209 : "荥阳市",
		170210 : "新密市",
		170211 : "新郑市",
		170212 : "登封市",
		170213 : "郑东新区",
		170214 : "高新区",
		170215 : "经开区",
		170216 : "郑州航空港区",
		170300 : "洛阳",
		170400 : "开封",
		170500 : "焦作",
		170600 : "南阳",
		170700 : "新乡",
		170800 : "周口",
		170900 : "安阳",
		171000 : "平顶山",
		171100 : "许昌",
		171200 : "信阳",
		171300 : "商丘",
		171400 : "驻马店",
		171500 : "漯河",
		171600 : "濮阳",
		171700 : "鹤壁",
		171800 : "三门峡",
		171900 : "济源",
		172000 : "邓州",
		180000 : "湖北省",
		180200 : "武汉",
		180201 : "江岸区",
		180202 : "江汉区",
		180203 : "硚口区",
		180204 : "汉阳区",
		180205 : "武昌区",
		180206 : "青山区",
		180207 : "洪山区",
		180208 : "东西湖区",
		180209 : "汉南区",
		180210 : "蔡甸区",
		180211 : "江夏区",
		180212 : "黄陂区",
		180213 : "新洲区",
		180214 : "武汉经济开发区",
		180215 : "东湖新技术产业开发区",
		180300 : "宜昌",
		180400 : "黄石",
		180500 : "襄阳",
		180600 : "十堰",
		180700 : "荆州",
		180800 : "荆门",
		180900 : "孝感",
		181000 : "鄂州",
		181100 : "黄冈",
		181200 : "随州",
		181300 : "咸宁",
		181400 : "仙桃",
		181500 : "潜江",
		181600 : "天门",
		181700 : "神农架",
		181800 : "恩施",
		190000 : "湖南省",
		190200 : "长沙",
		190201 : "芙蓉区",
		190202 : "天心区",
		190203 : "岳麓区",
		190204 : "开福区",
		190205 : "雨花区",
		190206 : "望城区",
		190207 : "长沙县",
		190208 : "宁乡县",
		190209 : "浏阳市",
		190300 : "株洲",
		190400 : "湘潭",
		190500 : "衡阳",
		190600 : "岳阳",
		190700 : "常德",
		190800 : "益阳",
		190900 : "郴州",
		191000 : "邵阳",
		191100 : "怀化",
		191200 : "娄底",
		191300 : "永州",
		191400 : "张家界",
		191500 : "湘西",
		200000 : "陕西省",
		200200 : "西安",
		200201 : "莲湖区",
		200202 : "新城区",
		200203 : "碑林区",
		200204 : "灞桥区",
		200205 : "未央区",
		200206 : "雁塔区",
		200207 : "阎良区",
		200208 : "临潼区",
		200209 : "长安区",
		200210 : "蓝田县",
		200211 : "周至县",
		200212 : "鄠邑区",
		200213 : "高陵区",
		200214 : "高新技术产业开发区",
		200215 : "经济技术开发区",
		200216 : "曲江文化新区",
		200217 : "浐灞生态区",
		200218 : "国家民用航天产业基地",
		200219 : "西咸新区",
		200220 : "西安阎良航空基地",
		200221 : "西安国际港务区",
		200300 : "咸阳",
		200400 : "宝鸡",
		200500 : "铜川",
		200600 : "延安",
		200700 : "渭南",
		200800 : "榆林",
		200900 : "汉中",
		201000 : "安康",
		201100 : "商洛",
		201200 : "杨凌",
		210000 : "山西省",
		210200 : "太原",
		210300 : "运城",
		210400 : "大同",
		210500 : "临汾",
		210600 : "长治",
		210700 : "晋城",
		210800 : "阳泉",
		210900 : "朔州",
		211000 : "晋中",
		211100 : "忻州",
		211200 : "吕梁",
		220000 : "黑龙江省",
		220200 : "哈尔滨",
		220201 : "道里区",
		220202 : "南岗区",
		220203 : "道外区",
		220204 : "平房区",
		220205 : "松北区",
		220206 : "香坊区",
		220207 : "呼兰区",
		220208 : "阿城区",
		220209 : "依兰县",
		220210 : "方正县",
		220211 : "宾县",
		220212 : "巴彦县",
		220213 : "木兰县",
		220214 : "通河县",
		220215 : "延寿县",
		220216 : "双城区",
		220217 : "尚志市",
		220218 : "五常市",
		220300 : "伊春",
		220400 : "绥化",
		220500 : "大庆",
		220600 : "齐齐哈尔",
		220700 : "牡丹江",
		220800 : "佳木斯",
		220900 : "鸡西",
		221000 : "鹤岗",
		221100 : "双鸭山",
		221200 : "黑河",
		221300 : "七台河",
		221400 : "大兴安岭",
		230000 : "辽宁省",
		230200 : "沈阳",
		230201 : "大东区",
		230202 : "浑南区",
		230203 : "康平县",
		230204 : "和平区",
		230205 : "皇姑区",
		230206 : "沈北新区",
		230207 : "沈河区",
		230208 : "苏家屯区",
		230209 : "铁西区",
		230210 : "于洪区",
		230211 : "法库县",
		230212 : "辽中区",
		230213 : "新民市",
		230300 : "大连",
		230301 : "西岗区",
		230302 : "中山区",
		230303 : "沙河口区",
		230304 : "甘井子区",
		230305 : "旅顺口区",
		230306 : "金州区",
		230307 : "瓦房店市",
		230308 : "普兰店区",
		230309 : "庄河市",
		230310 : "长海县",
		230312 : "高新园区",
		230313 : "长兴岛",
		230314 : "大连保税区",
		230400 : "鞍山",
		230500 : "营口",
		230600 : "抚顺",
		230700 : "锦州",
		230800 : "丹东",
		230900 : "葫芦岛",
		231000 : "本溪",
		231100 : "辽阳",
		231200 : "铁岭",
		231300 : "盘锦",
		231400 : "朝阳",
		231500 : "阜新",
		240000 : "吉林省",
		240200 : "长春",
		240201 : "朝阳区",
		240202 : "南关区",
		240203 : "宽城区",
		240204 : "二道区",
		240205 : "绿园区",
		240206 : "双阳区",
		240207 : "经济技术开发区",
		240208 : "高新技术产业开发区",
		240209 : "净月经济开发区",
		240210 : "汽车产业开发区",
		240211 : "榆树市",
		240212 : "九台区",
		240213 : "德惠市",
		240214 : "农安县",
		240300 : "吉林",
		240400 : "辽源",
		240500 : "通化",
		240600 : "四平",
		240700 : "松原",
		240800 : "延吉",
		240900 : "白山",
		241000 : "白城",
		241100 : "延边",
		250000 : "云南省",
		250200 : "昆明",
		250201 : "五华区",
		250202 : "盘龙区",
		250203 : "官渡区",
		250204 : "西山区",
		250205 : "东川区",
		250206 : "呈贡区",
		250207 : "晋宁区",
		250208 : "富民县",
		250209 : "宜良县",
		250210 : "石林彝族自治县",
		250211 : "嵩明县",
		250212 : "禄劝县",
		250213 : "寻甸县",
		250214 : "安宁市",
		250300 : "曲靖",
		250400 : "玉溪",
		250500 : "大理",
		250600 : "丽江",
		251000 : "红河州",
		251100 : "普洱",
		251200 : "保山",
		251300 : "昭通",
		251400 : "文山",
		251500 : "西双版纳",
		251600 : "德宏",
		251700 : "楚雄",
		251800 : "临沧",
		251900 : "怒江",
		252000 : "迪庆",
		260000 : "贵州省",
		260200 : "贵阳",
		260300 : "遵义",
		260400 : "六盘水",
		260500 : "安顺",
		260600 : "铜仁",
		260700 : "毕节",
		260800 : "黔西南",
		260900 : "黔东南",
		261000 : "黔南",
		270000 : "甘肃省",
		270200 : "兰州",
		270300 : "金昌",
		270400 : "嘉峪关",
		270500 : "酒泉",
		270600 : "天水",
		270700 : "武威",
		270800 : "白银",
		270900 : "张掖",
		271000 : "平凉",
		271100 : "定西",
		271200 : "陇南",
		271300 : "庆阳",
		271400 : "临夏",
		271500 : "甘南",
		280000 : "内蒙古",
		280200 : "呼和浩特",
		280300 : "赤峰",
		280400 : "包头",
		280700 : "通辽",
		280800 : "鄂尔多斯",
		280900 : "巴彦淖尔",
		281000 : "乌海",
		281100 : "呼伦贝尔",
		281200 : "乌兰察布",
		281300 : "兴安盟",
		281400 : "锡林郭勒盟",
		281500 : "阿拉善盟",
		290000 : "宁夏",
		290200 : "银川",
		290300 : "吴忠",
		290400 : "中卫",
		290500 : "石嘴山",
		290600 : "固原",
		300000 : "西藏",
		300200 : "拉萨",
		300300 : "日喀则",
		300400 : "林芝",
		300500 : "山南",
		300600 : "昌都",
		300700 : "那曲",
		300800 : "阿里",
		310000 : "新疆",
		310200 : "乌鲁木齐",
		310300 : "克拉玛依",
		310400 : "喀什地区",
		310500 : "伊犁",
		310600 : "阿克苏",
		310700 : "哈密",
		310800 : "石河子",
		310900 : "阿拉尔",
		311000 : "五家渠",
		311100 : "图木舒克",
		311200 : "昌吉",
		311300 : "阿勒泰",
		311400 : "吐鲁番",
		311500 : "塔城",
		311600 : "和田",
		311700 : "克孜勒苏柯尔克孜",
		311800 : "巴音郭楞",
		311900 : "博尔塔拉",
		320000 : "青海省",
		320200 : "西宁",
		320300 : "海东",
		320400 : "海西",
		320500 : "海北",
		320600 : "黄南",
		320700 : "海南",
		320800 : "果洛",
		320900 : "玉树",
		330000 : "香港",
		340000 : "澳门",
		350000 : "台湾",
		360000 : "国外",
		361000 : "亚洲",
		361001 : "日本",
		361002 : "韩国",
		361003 : "马来西亚",
		361004 : "新加坡",
		361005 : "泰国",
		361006 : "菲律宾",
		361007 : "印度尼西亚",
		361008 : "斯里兰卡",
		361009 : "印度",
		361010 : "缅甸",
		361011 : "越南",
		361012 : "朝鲜",
		361013 : "哈萨克斯坦",
		361014 : "乌兹别克斯坦",
		361015 : "伊朗",
		361016 : "伊拉克",
		361017 : "阿富汗",
		361018 : "巴基斯坦",
		361019 : "土耳其",
		361020 : "科威特",
		361021 : "沙特阿拉伯",
		361022 : "蒙古",
		361023 : "孟加拉国",
		362000 : "欧洲",
		362001 : "英国",
		362002 : "法国",
		362003 : "德国",
		362004 : "意大利",
		362005 : "西班牙",
		362006 : "葡萄牙",
		362007 : "爱尔兰",
		362008 : "波兰",
		362009 : "挪威",
		362010 : "瑞典",
		362011 : "芬兰",
		362012 : "奥地利",
		362013 : "乌克兰",
		362014 : "白俄罗斯",
		362015 : "保加利亚",
		362016 : "罗马尼亚",
		362017 : "匈牙利",
		362018 : "希腊",
		362019 : "俄罗斯",
		362020 : "瑞士",
		362021 : "丹麦",
		362022 : "比利时",
		362023 : "荷兰",
		363000 : "美洲",
		363001 : "美国",
		363002 : "加拿大",
		363003 : "墨西哥",
		363004 : "巴西",
		363005 : "阿根廷",
		363006 : "智利",
		363007 : "秘鲁",
		363008 : "哥伦比亚",
		363009 : "委内瑞拉",
		363010 : "玻利维亚",
		364000 : "非洲",
		364001 : "埃及",
		364002 : "南非",
		364003 : "苏丹",
		364004 : "阿尔及利亚",
		364005 : "埃塞俄比亚",
		364006 : "肯尼亚",
		364007 : "赞比亚",
		364008 : "坦桑尼亚",
		364009 : "马达加斯加",
		364010 : "莫桑比克",
		364011 : "安哥拉",
		364012 : "加纳",
		364013 : "摩洛哥",
		364014 : "尼日利亚",
		365000 : "大洋洲",
		365001 : "澳大利亚",
		365002 : "新西兰",
		366000 : "其他",
		"01" : "珠三角"
	}
}, function(e, t, a) {
	"use strict";
	window.it = {
		"01" : "计算机软件",
		37 : "计算机硬件",
		38 : "计算机服务(系统、数据服务、维修)",
		31 : "通信/电信/网络设备",
		39 : "通信/电信运营、增值服务",
		32 : "互联网/电子商务",
		40 : "网络游戏",
		"02" : "电子技术/半导体/集成电路",
		35 : "仪器仪表/工业自动化",
		41 : "会计/审计",
		"03" : "金融/投资/证券",
		42 : "银行",
		43 : "保险",
		62 : "信托/担保/拍卖/典当",
		"04" : "贸易/进出口",
		22 : "批发/零售",
		"05" : "快速消费品(食品、饮料、化妆品)",
		"06" : "服装/纺织/皮革",
		44 : "家具/家电/玩具/礼品",
		60 : "奢侈品/收藏品/工艺品/珠宝",
		45 : "办公用品及设备",
		14 : "机械/设备/重工",
		33 : "汽车及零配件",
		"08" : "制药/生物工程",
		46 : "医疗/护理/卫生",
		47 : "医疗设备/器械",
		12 : "广告",
		48 : "公关/市场推广/会展",
		49 : "影视/媒体/艺术/文化传播",
		13 : "文字媒体/出版",
		15 : "印刷/包装/造纸",
		26 : "房地产",
		"09" : "建筑/建材/工程",
		50 : "家居/室内设计/装潢",
		51 : "物业管理/商业中心",
		34 : "中介服务",
		63 : "租赁服务",
		"07" : "专业服务(咨询、人力资源、财会)",
		59 : "外包服务",
		52 : "检测，认证",
		18 : "法律",
		23 : "教育/培训/院校",
		24 : "学术/科研",
		11 : "餐饮业",
		53 : "酒店/旅游",
		17 : "娱乐/休闲/体育",
		54 : "美容/保健",
		27 : "生活服务",
		21 : "交通/运输/物流",
		55 : "航天/航空",
		19 : "石油/化工/矿产/地质",
		16 : "采掘业/冶炼",
		36 : "电气/电力/水利",
		61 : "新能源",
		56 : "原材料和加工",
		28 : "政府/公共事业",
		57 : "非营利组织",
		20 : "环保",
		29 : "农/林/牧/渔",
		58 : "多元化业务集团公司"
	}
}, function(e, t, a) {
	"use strict";
	window.ft = {
		2400 : "计算机硬件",
		2401 : "高级硬件工程师",
		2402 : "硬件工程师",
		2403 : "其他",
		"0100" : "计算机软件",
		"0106" : "高级软件工程师",
		"0107" : "软件工程师",
		"0144" : "软件UI设计师/工程师",
		"0148" : "算法工程师",
		"0109" : "机器学习工程师",
		"0110" : "深度学习工程师",
		"0111" : "图像算法工程师",
		"0112" : "图像处理工程师",
		"0113" : "语音识别工程师",
		"0114" : "图像识别工程师",
		"0115" : "机器视觉工程师",
		"0116" : "自然语言处理（NLP）",
		"0145" : "仿真应用工程师",
		"0146" : "ERP实施顾问",
		"0117" : "ERP技术开发",
		"0147" : "需求工程师",
		"0137" : "系统集成工程师",
		"0123" : "系统分析员",
		"0127" : "系统工程师",
		"0143" : "系统架构设计师",
		"0108" : "数据库工程师/管理员",
		"0141" : "计算机辅助设计工程师",
		"0142" : "其他",
		2500 : "互联网/电子商务/网游",
		2501 : "互联网软件开发工程师",
		2514 : "语音/视频/图形开发工程师",
		2502 : "多媒体/游戏开发工程师",
		2537 : "手机应用开发工程师",
		2530 : "网站运营总监",
		2503 : "网站运营经理/主管",
		2516 : "网站运营专员",
		2531 : "产品总监",
		2525 : "产品经理/主管",
		2526 : "产品专员",
		2524 : "SEO/SEM",
		2532 : "网络推广总监",
		2533 : "网络推广经理/主管",
		2534 : "网络推广专员",
		2510 : "新媒体运营",
		2535 : "电子商务总监",
		2527 : "电子商务经理/主管",
		2528 : "电子商务专员",
		2504 : "网络工程师",
		2515 : "UI设计师/顾问",
		2536 : "用户体验（UE/UX）设计师",
		2529 : "大数据开发/分析",
		2539 : "Web前端开发",
		2512 : "网站架构设计师",
		2513 : "网站维护工程师",
		2505 : "系统管理员/网络管理员",
		2506 : "网站策划",
		2507 : "网站编辑",
		2508 : "网页设计/制作/美工",
		2517 : "脚本开发工程师",
		2518 : "游戏策划师",
		2519 : "游戏界面设计师",
		2520 : "Flash设计/开发",
		2521 : "特效设计师",
		2522 : "视觉设计师",
		2523 : "音效设计师",
		2509 : "网络信息安全工程师",
		2511 : "其他",
		2600 : "IT-管理",
		2601 : "首席技术执行官CTO/首席信息官CIO",
		2602 : "技术总监/经理",
		2603 : "信息技术经理/主管",
		2604 : "信息技术专员",
		2605 : "项目总监",
		2606 : "项目经理",
		2607 : "项目主管",
		2608 : "项目执行/协调人员",
		2609 : "其他",
		2700 : "IT-品管、技术支持及其它",
		2701 : "技术支持/维护经理",
		2702 : "技术支持/维护工程师",
		2712 : "网络管理(Helpdesk)",
		2715 : "网络维修",
		2703 : "计量工程师",
		2704 : "标准化工程师",
		2705 : "品质经理",
		2706 : "系统测试",
		2707 : "软件测试",
		2708 : "硬件测试",
		2709 : "测试员",
		2713 : "文档工程师",
		2714 : "配置管理工程师",
		2710 : "技术文员/助理",
		2716 : "手机维修",
		2717 : "电脑维修",
		2711 : "其他",
		2800 : "通信技术开发及应用",
		2801 : "通信技术工程师",
		2802 : "有线传输工程师",
		2803 : "无线通信工程师",
		2804 : "电信交换工程师",
		2805 : "数据通信工程师",
		2806 : "移动通信工程师",
		2807 : "电信网络工程师",
		2808 : "通信电源工程师",
		2810 : "增值产品开发工程师",
		2811 : "手机软件开发工程师",
		2809 : "其他",
		2900 : "电子/电器/半导体/仪器仪表",
		2901 : "集成电路IC设计/应用工程师",
		2902 : "IC验证工程师",
		2903 : "电子工程师/技术员",
		2917 : "电子技术研发工程师",
		2924 : "射频工程师",
		2920 : "电子/电器维修工程师/技师",
		2921 : "变压器与磁电工程师",
		2922 : "版图设计工程师",
		2904 : "电气工程师/技术员",
		2905 : "电路工程师/技术员(模拟/数字)",
		2906 : "电声/音响工程师/技术员",
		2918 : "激光/光电子技术",
		2907 : "半导体技术",
		2908 : "自动控制工程师/技术员",
		2909 : "电子软件开发(ARM/MCU...)",
		2910 : "嵌入式软件开发(Linux/单片机/PLC/DSP…)",
		2919 : "嵌入式硬件开发(主板机…)",
		2911 : "电池/电源开发",
		2912 : "FAE 现场应用工程师",
		2923 : "工艺工程师",
		2913 : "家用电器/数码产品研发",
		2914 : "仪器/仪表/计量分析师",
		2915 : "测试工程师",
		2925 : "安防系统工程师",
		2916 : "其他",
		"0200" : "销售管理",
		"0201" : "销售总监",
		"0202" : "销售经理",
		"0203" : "销售主管",
		"0232" : "业务拓展主管/经理",
		"0233" : "渠道/分销总监",
		"0207" : "渠道/分销经理",
		"0220" : "渠道/分销主管",
		"0235" : "大客户管理",
		"0208" : "客户经理/主管",
		"0230" : "区域销售总监",
		"0226" : "区域销售经理",
		"0234" : "团购经理/主管",
		"0231" : "其他",
		3000 : "销售人员",
		3009 : "大客户销售",
		3001 : "销售代表",
		3002 : "渠道/分销专员",
		3003 : "客户代表",
		3004 : "销售工程师",
		3005 : "电话销售",
		3010 : "网络/在线销售",
		3008 : "团购业务员",
		3006 : "经销商",
		3011 : "会籍顾问",
		3012 : "销售助理",
		3007 : "其他",
		3100 : "销售行政及商务",
		3101 : "销售行政经理/主管",
		3102 : "销售行政专员",
		3108 : "业务分析经理/主管",
		3109 : "业务分析专员/助理",
		3103 : "商务经理",
		3104 : "商务主管/专员",
		3105 : "商务助理",
		3106 : "销售行政助理",
		3107 : "其他",
		3200 : "客服及支持",
		3201 : "客服总监",
		3202 : "客服经理",
		3203 : "客服主管",
		3204 : "客服专员/助理",
		3210 : "客户关系经理/主管",
		3205 : "售前/售后技术支持经理",
		3206 : "售前/售后技术支持主管",
		3207 : "售前/售后技术支持工程师",
		3208 : "咨询热线/呼叫中心服务人员",
		3213 : "网络/在线客服",
		3211 : "投诉专员",
		3212 : "VIP专员",
		3209 : "其他",
		"0400" : "财务/审计/税务",
		"0444" : "首席财务官 CFO",
		"0401" : "财务总监",
		"0402" : "财务经理",
		"0445" : "财务顾问",
		"0403" : "财务主管/总账主管",
		"0404" : "会计经理/会计主管",
		"0405" : "会计",
		"0414" : "出纳员",
		"0422" : "财务助理/文员",
		"0448" : "固定资产会计",
		"0406" : "财务分析经理/主管",
		"0407" : "财务分析员",
		"0408" : "成本经理/成本主管",
		"0409" : "成本管理员",
		"0449" : "资金经理/主管",
		"0450" : "资金专员",
		"0410" : "审计经理/主管",
		"0419" : "审计专员/助理",
		"0411" : "税务经理/税务主管",
		"0412" : "税务专员/助理",
		"0446" : "统计员",
		"0443" : "其他",
		3300 : "金融/证券/期货/投资",
		3301 : "证券/期货/外汇经纪人",
		3302 : "证券分析师",
		3303 : "股票/期货操盘手",
		3304 : "金融/经济研究员",
		3312 : "金融产品经理",
		3315 : "金融产品销售",
		3305 : "投资/基金项目经理",
		3306 : "投资/理财顾问",
		3307 : "投资银行业务",
		3313 : "投资银行财务分析",
		3308 : "融资经理/融资主管",
		3309 : "融资专员",
		3314 : "风险管理/控制",
		3310 : "拍卖/担保/典当业务",
		3311 : "其他",
		2200 : "银行",
		2207 : "行长/副行长",
		2231 : "银行客户总监",
		2223 : "个人业务部门经理/主管",
		2224 : "个人业务客户经理",
		2225 : "公司业务部门经理/主管",
		2226 : "公司业务客户经理",
		2227 : "综合业务经理/主管",
		2228 : "综合业务专员",
		2208 : "资产评估/分析",
		2209 : "风险控制",
		2215 : "信贷管理",
		2229 : "信审核查",
		2210 : "进出口/信用证结算",
		2212 : "外汇交易",
		2211 : "清算人员",
		2213 : "高级客户经理/客户经理",
		2214 : "客户主管/专员",
		2230 : "营业部大堂经理",
		2222 : "信用卡销售",
		2232 : "呼叫中心客服",
		2216 : "银行柜员",
		2221 : "其他",
		3400 : "保险",
		3401 : "保险精算师",
		3402 : "保险产品开发/项目策划",
		3403 : "保险业务经理/主管",
		3404 : "保险经纪人/保险代理",
		3405 : "理财顾问/财务规划师",
		3406 : "储备经理人",
		3414 : "保险电销",
		3407 : "保险核保",
		3408 : "保险理赔",
		3409 : "保险客户服务/续期管理",
		3410 : "保险培训师",
		3411 : "保险内勤",
		3413 : "契约管理",
		3412 : "其他",
		3500 : "生产/营运",
		3501 : "工厂经理/厂长",
		3502 : "总工程师/副总工程师",
		3513 : "项目总监",
		3503 : "项目经理/主管",
		3504 : "项目工程师",
		3505 : "营运经理",
		3506 : "营运主管",
		3514 : "生产总监",
		3507 : "生产经理/车间主任",
		3509 : "生产主管",
		3515 : "生产领班/组长",
		3508 : "生产计划/物料管理(PMC)",
		3512 : "生产文员",
		3516 : "设备主管",
		3510 : "化验员",
		3511 : "其他",
		3600 : "质量安全",
		3601 : "质量管理/测试经理(QA/QC经理)",
		3602 : "质量管理/测试主管(QA/QC主管)",
		3603 : "质量管理/测试工程师(QA/QC工程师)",
		3604 : "质量检验员/测试员",
		3605 : "可靠度工程师",
		3606 : "故障分析工程师",
		3607 : "认证工程师",
		3608 : "体系工程师",
		3615 : "审核员",
		3609 : "环境/健康/安全经理/主管（EHS）",
		3610 : "环境/健康/安全工程师（EHS）",
		3614 : "安全员",
		3611 : "供应商管理",
		3612 : "采购材料、设备质量管理",
		3613 : "其他",
		"0500" : "工程/机械/能源",
		"0510" : "技术研发经理/主管",
		"0511" : "技术研发工程师",
		"0547" : "产品工艺/制程工程师",
		"0559" : "产品规划工程师",
		"0584" : "项目管理",
		"0512" : "实验室负责人/工程师",
		"0513" : "工程/设备经理",
		"0514" : "工程/设备主管",
		"0515" : "工程/设备工程师",
		"0523" : "工程/机械绘图员",
		"0560" : "工业工程师",
		"0582" : "材料工程师",
		"0539" : "机械工程师",
		"0561" : "结构工程师",
		"0548" : "模具工程师",
		"0544" : "机电工程师",
		"0580" : "维修经理/主管",
		"0537" : "维修工程师",
		"0581" : "装配工程师/技师",
		"0562" : "铸造/锻造工程师/技师",
		"0563" : "注塑工程师/技师",
		"0564" : "焊接工程师/技师",
		"0565" : "夹具工程师/技师",
		"0566" : "CNC工程师",
		"0567" : "冲压工程师/技师",
		"0568" : "锅炉工程师/技师",
		"0569" : "电力工程师/技术员",
		"0570" : "光源与照明工程",
		"0583" : "光伏系统工程师",
		"0571" : "汽车/摩托车工程师",
		"0572" : "船舶工程师",
		"0575" : "轨道交通工程师/技术员",
		"0576" : "飞机维修机械师",
		"0573" : "飞行器设计与制造",
		"0577" : "水利/水电工程师",
		"0585" : "空调/热能工程师",
		"0578" : "石油天然气技术人员",
		"0579" : "矿产勘探/地质勘测工程师",
		"0574" : "其他",
		5400 : "汽车制造",
		5407 : "研发总监/部长/专家",
		5401 : "汽车机构工程师",
		5402 : "汽车设计工程师",
		5403 : "汽车电子工程师",
		5414 : "发动机/总装工程师",
		5408 : "动力总成工程师",
		5409 : "底盘工程师",
		5412 : "汽车项目管理",
		5404 : "汽车质量管理",
		5405 : "汽车安全性能工程师",
		5406 : "汽车装配工艺工程师",
		5410 : "电气/电器工程师",
		5413 : "附件系统工程师",
		5415 : "内外饰工程师",
		5416 : "车身/造型设计",
		5417 : "车辆质量工程师",
		5418 : "新能源电池工程师",
		5419 : "新能源电控工程师",
		5420 : "新能源电机工程师",
		5411 : "其他",
		5900 : "汽车销售与服务",
		5901 : "4S店经理/维修站经理",
		5903 : "汽车销售/经纪人",
		5907 : "汽车修理工",
		5912 : "汽车电工",
		5913 : "汽车钣金",
		5914 : "汽车喷漆",
		5905 : "汽车检验/检测",
		5906 : "汽车装饰美容",
		5908 : "洗车工",
		5902 : "售后服务/客户服务",
		5904 : "二手车评估师",
		5910 : "加油站工作员",
		5911 : "其他",
		3700 : "技工普工",
		3710 : "普工/操作工",
		3701 : "技工",
		3707 : "叉车/铲车工",
		3715 : "组装工",
		3716 : "包装工",
		3703 : "焊工",
		3717 : "氩弧焊工",
		3706 : "电工",
		3718 : "电力线路工",
		3719 : "旋压工",
		3720 : "仪表工",
		3721 : "电镀工",
		3722 : "喷塑工",
		3709 : "水工",
		3723 : "木工",
		3724 : "漆工",
		3708 : "空调工",
		3725 : "电梯工",
		3726 : "锅炉工",
		3727 : "学徒工",
		3713 : "其他",
		3800 : "服装/纺织/皮革",
		3812 : "服装/纺织设计总监",
		3801 : "服装/纺织设计",
		3813 : "服装/纺织/皮革工艺师",
		3802 : "面料辅料开发",
		3803 : "面料辅料采购",
		3804 : "服装/纺织/皮革跟单",
		3814 : "服装领班",
		3805 : "质量管理/验货员(QA/QC)",
		3806 : "板房/楦头/底格出格师",
		3811 : "电脑放码员",
		3808 : "纸样师/车板工",
		3809 : "裁床",
		3807 : "打样/制版",
		3815 : "裁剪工",
		3816 : "缝纫工",
		3817 : "手缝工",
		3818 : "烫工",
		3819 : "样衣工",
		3820 : "纺织工",
		3821 : "针织工",
		3822 : "配色工",
		3823 : "印染工",
		3824 : "漂染工",
		3825 : "挡车工",
		3826 : "整经工",
		3827 : "细纱工",
		3828 : "浆纱工",
		3810 : "其他",
		3900 : "采购",
		3901 : "采购总监",
		3902 : "采购经理",
		3903 : "采购主管",
		3904 : "采购员",
		3905 : "采购助理",
		3908 : "买手",
		3909 : "供应商开发",
		3907 : "其他",
		4000 : "贸易",
		4001 : "贸易/外贸经理/主管",
		4002 : "贸易/外贸专员/助理",
		4003 : "国内贸易人员",
		4004 : "业务跟单经理",
		4005 : "高级业务跟单",
		4006 : "业务跟单",
		4007 : "助理业务跟单",
		4008 : "其他",
		"0800" : "物流/仓储",
		"0827" : "物流总监",
		"0801" : "物流经理",
		"0802" : "物流主管",
		"0814" : "物流专员/助理",
		"0828" : "供应链总监",
		"0825" : "供应链经理",
		"0826" : "供应链主管/专员",
		"0803" : "物料经理",
		"0804" : "物料主管/专员",
		"0808" : "仓库经理/主管",
		"0809" : "仓库管理员",
		"0834" : "订单处理员",
		"0810" : "运输经理/主管",
		"0833" : "项目经理/主管",
		"0829" : "货运代理",
		"0830" : "集装箱业务",
		"0832" : "海关事务管理",
		"0811" : "报关与报检",
		"0812" : "单证员",
		"0815" : "船务/空运陆运操作",
		"0813" : "快递员",
		"0831" : "调度员",
		"0835" : "安检员",
		"0823" : "理货员",
		"0836" : "搬运工",
		"0824" : "其他",
		4100 : "生物/制药/医疗器械",
		4101 : "生物工程/生物制药",
		4116 : "化学分析测试员",
		4103 : "医药技术研发管理人员",
		4104 : "医药技术研发人员",
		4126 : "医药学术推广",
		4105 : "临床研究员",
		4106 : "临床协调员",
		4123 : "临床数据分析员",
		4107 : "药品注册",
		4108 : "药品生产/质量管理",
		4109 : "药品市场推广经理",
		4110 : "药品市场推广主管/专员",
		4120 : "医药招商",
		4121 : "政府事务管理",
		4122 : "招投标管理",
		4111 : "医药销售经理/主管",
		4112 : "医药代表",
		4102 : "医药销售人员",
		4117 : "医疗器械注册",
		4124 : "医疗器械研发",
		4118 : "医疗器械生产/质量管理",
		4113 : "医疗器械市场推广",
		4125 : "医疗器械销售经理/主管",
		4114 : "医疗器械销售代表",
		4119 : "医疗器械维修人员",
		4115 : "其他",
		5500 : "化工",
		5501 : "化工技术应用/化工工程师",
		5502 : "化工实验室研究员/技术员",
		5503 : "涂料研发工程师",
		5504 : "配色技术员",
		5505 : "塑料工程师",
		5506 : "化妆品研发",
		5507 : "食品/饮料研发",
		5509 : "造纸研发",
		5508 : "其他",
		1300 : "医院/医疗/护理",
		1302 : "医院管理人员",
		1328 : "综合门诊/全科医生",
		1301 : "内科医生",
		1317 : "外科医生",
		1318 : "专科医生",
		1319 : "牙科医生",
		1320 : "美容整形师",
		1308 : "麻醉医生",
		1327 : "超声影像/放射科医师",
		1321 : "理疗师",
		1322 : "中医科医生",
		1313 : "针灸/推拿",
		1325 : "儿科医生",
		1309 : "心理医生",
		1314 : "营养师",
		1304 : "药库主任/药剂师",
		1310 : "医药学检验",
		1323 : "公共卫生/疾病控制",
		1324 : "护理主任/护士长",
		1305 : "护士/护理人员",
		1315 : "兽医",
		1326 : "验光师",
		1311 : "其他",
		4200 : "广告",
		4201 : "广告客户总监/副总监",
		4202 : "广告客户经理",
		4203 : "广告客户主管/专员",
		4204 : "广告创意/设计经理",
		4205 : "广告创意总监",
		4206 : "广告创意/设计主管/专员",
		4212 : "广告制作执行",
		4211 : "美术指导",
		4207 : "文案/策划",
		4208 : "企业/业务发展经理",
		4209 : "企业策划人员",
		4210 : "其他",
		4300 : "公关/媒介",
		4315 : "公关总监",
		4301 : "公关经理",
		4302 : "公关主管",
		4303 : "公关专员",
		4304 : "会务/会展经理",
		4305 : "会务/会展主管",
		4306 : "会务/会展专员",
		4307 : "媒介经理",
		4308 : "媒介主管",
		4309 : "媒介专员",
		4310 : "公关/媒介助理",
		4312 : "媒介销售",
		4313 : "活动策划",
		4314 : "活动执行",
		4311 : "其他",
		"0300" : "市场/营销",
		"0301" : "市场/营销/拓展总监",
		"0302" : "市场/营销/拓展经理",
		"0303" : "市场/营销/拓展主管",
		"0304" : "市场/营销/拓展专员",
		"0305" : "市场助理",
		"0324" : "市场分析/调研人员",
		"0306" : "产品/品牌经理",
		"0307" : "产品/品牌主管",
		"0330" : "产品/品牌专员",
		"0308" : "市场通路经理/主管",
		"0335" : "市场通路专员",
		"0336" : "市场企划经理/主管",
		"0337" : "市场企划专员",
		"0310" : "促销经理",
		"0311" : "促销主管/督导",
		"0312" : "促销员/导购",
		"0338" : "选址拓展/新店开发",
		"0329" : "其他",
		4400 : "影视/媒体",
		4401 : "影视策划/制作人员",
		4402 : "导演/编导",
		4403 : "艺术/设计总监",
		4414 : "艺术指导/舞台美术设计",
		4404 : "经纪人/星探",
		4405 : "主播/主持人",
		4406 : "摄影师/摄像师",
		4411 : "后期制作",
		4407 : "音效师",
		4408 : "配音员",
		4415 : "灯光师",
		4412 : "放映经理/主管",
		4413 : "放映员",
		4410 : "其他",
		4500 : "编辑出版",
		4501 : "总编/副总编",
		4502 : "编辑",
		4517 : "作家/撰稿人",
		4503 : "记者",
		4516 : "电话采编",
		4504 : "美术编辑",
		4505 : "排版设计",
		4507 : "出版/发行",
		4508 : "其他",
		"0900" : "艺术/设计",
		"0930" : "平面设计总监",
		"0931" : "平面设计经理/主管",
		"0904" : "平面设计师",
		"0932" : "绘画",
		"0924" : "动画/3D设计",
		"0933" : "原画师",
		"0925" : "展览/展示/店面设计",
		"0926" : "多媒体设计",
		"0927" : "包装设计",
		"0919" : "工业/产品设计",
		"0920" : "工艺品/珠宝设计鉴定",
		"0928" : "家具/家居用品设计",
		"0929" : "玩具设计",
		"0921" : "其他",
		2100 : "建筑工程与装潢",
		2123 : "高级建筑工程师/总工",
		2101 : "建筑工程师",
		2131 : "建筑设计师",
		2132 : "市政工程师",
		2102 : "结构/土木/土建工程师",
		2118 : "公路/桥梁/港口/隧道工程",
		2119 : "岩土工程",
		2125 : "楼宇自动化",
		2103 : "建筑机电工程师",
		2126 : "智能大厦/综合布线/安防/弱电",
		2104 : "给排水/暖通工程",
		2122 : "幕墙工程师",
		2109 : "规划与设计",
		2108 : "室内设计",
		2117 : "园艺/园林/景观设计",
		2120 : "测绘/测量",
		2110 : "建筑制图/模型/渲染",
		2127 : "开发报建",
		2105 : "工程造价师/预结算经理",
		2124 : "预结算员",
		2106 : "建筑工程管理/项目经理",
		2133 : "建筑项目助理",
		2121 : "建筑工程验收",
		2107 : "工程监理",
		2128 : "合同管理",
		2129 : "安全员",
		2130 : "资料员",
		2111 : "建筑安装施工员",
		2134 : "砌筑工",
		2135 : "瓦工",
		2136 : "混凝土工",
		2137 : "浇注工",
		2138 : "钢筋工",
		2139 : "木工",
		2140 : "油漆工",
		2141 : "电梯工",
		2142 : "抹灰工",
		2143 : "施工开料工",
		2144 : "管道/暖通",
		2145 : "工长",
		2116 : "其他",
		4600 : "房地产开发",
		4601 : "房地产项目/策划经理",
		4602 : "房地产项目/策划主管/专员",
		4604 : "房地产投资管理",
		4603 : "房产项目配套工程师",
		4608 : "房地产项目招投标",
		4610 : "房地产投资分析",
		4611 : "房地产资产管理",
		4612 : "监察人员",
		4607 : "其他",
		6000 : "房地产销售与中介",
		6009 : "房地产销售经理/主管",
		6010 : "房地产销售",
		6001 : "房地产中介/置业顾问",
		6002 : "房地产评估",
		6004 : "房地产店长/经理",
		6007 : "房地产内勤",
		6006 : "房地产客服",
		6008 : "其他",
		4700 : "物业管理",
		4702 : "物业管理经理",
		4714 : "物业管理主管",
		4703 : "物业管理专员/助理",
		4716 : "前介工程师",
		4705 : "物业设施管理人员",
		4715 : "物业机电维修工",
		4706 : "物业维修员",
		4701 : "高级物业顾问/物业顾问",
		4704 : "物业招商/租赁/租售",
		4709 : "停车管理员",
		4710 : "保安经理",
		4711 : "保安人员",
		4708 : "物业机电工程师",
		4712 : "保洁",
		4713 : "绿化工",
		4707 : "其他",
		"0600" : "人力资源",
		"0601" : "人事总监",
		"0611" : "HRBP",
		"0602" : "人事经理",
		"0603" : "人事主管",
		"0604" : "人事专员",
		"0605" : "人事助理",
		"0606" : "招聘经理/主管",
		"0626" : "招聘专员/助理",
		"0607" : "薪资福利经理/主管",
		"0608" : "薪资福利专员/助理",
		"0627" : "绩效考核经理/主管",
		"0628" : "绩效考核专员/助理",
		"0609" : "培训经理/主管",
		"0610" : "培训专员/助理/培训师",
		"0629" : "企业文化/员工关系/工会管理",
		"0630" : "人力资源信息系统专员",
		"0625" : "其他",
		"0700" : "高级管理",
		"0701" : "首席执行官CEO/总裁/总经理",
		"0707" : "首席运营官COO",
		"0702" : "副总经理/副总裁",
		"0704" : "合伙人",
		"0705" : "总监/部门经理",
		"0710" : "策略发展总监",
		"0711" : "企业秘书/董事会秘书",
		"0712" : "投资者关系",
		"0708" : "办事处首席代表",
		"0709" : "办事处/分公司/分支机构经理",
		"0703" : "总裁助理/总经理助理",
		"0706" : "其他",
		2300 : "行政/后勤",
		2301 : "行政总监",
		2302 : "行政经理/主管/办公室主任",
		2303 : "行政专员/助理",
		2304 : "经理助理/秘书",
		2310 : "党工团干事",
		2305 : "前台接待/总机/接待生",
		2307 : "图书管理员/资料管理员",
		2308 : "电脑操作员/打字员",
		2306 : "后勤",
		2309 : "其他",
		1400 : "咨询/顾问",
		1401 : "专业顾问",
		1402 : "咨询总监",
		1403 : "咨询经理",
		1406 : "专业培训师",
		1404 : "咨询员",
		1409 : "调研员",
		1408 : "猎头/人才中介",
		1407 : "情报信息分析人员",
		1405 : "其他",
		1100 : "律师/法务/合规",
		1101 : "律师/法律顾问",
		1103 : "律师助理",
		1106 : "法务经理",
		1102 : "法务主管/专员",
		1107 : "法务助理",
		1109 : "合规经理",
		1110 : "合规主管/专员",
		1108 : "知识产权/专利/商标",
		1105 : "其他",
		1200 : "教师",
		1213 : "校长",
		1208 : "大学教授",
		1204 : "讲师/助教",
		1201 : "中学教师",
		1209 : "小学教师",
		1207 : "幼教",
		1215 : "外语培训师",
		1202 : "院校教务管理人员",
		1210 : "兼职教师",
		1205 : "家教",
		1214 : "音乐/美术教师",
		1216 : "体育教师",
		1211 : "职业技术教师",
		1206 : "其他",
		5700 : "培训",
		5701 : "培训督导",
		5702 : "培训讲师",
		5703 : "培训策划",
		5707 : "培训产品开发",
		5706 : "培训/课程顾问",
		5704 : "培训助理",
		5705 : "其他",
		1000 : "科研",
		1002 : "科研管理人员",
		1001 : "科研人员",
		4800 : "餐饮服务",
		4801 : "店长/经理",
		4819 : "大堂经理",
		4802 : "餐厅领班",
		4803 : "餐饮服务员",
		4806 : "行政主厨/厨师长",
		4807 : "中餐厨师",
		4820 : "西餐厨师",
		4821 : "日式厨师",
		4822 : "面点师",
		4823 : "西点师",
		4812 : "厨师助理/学徒",
		4809 : "茶艺师",
		4816 : "咖啡师",
		4808 : "调酒师/侍酒师/吧台员",
		4804 : "礼仪/迎宾",
		4824 : "预订员",
		4818 : "收银员",
		4813 : "配菜/打荷",
		4811 : "传菜主管",
		4825 : "传菜员",
		4814 : "洗碗工",
		4815 : "送餐员",
		4817 : "杂工",
		4810 : "其他",
		4900 : "酒店旅游",
		4901 : "酒店/宾馆经理",
		4902 : "酒店/宾馆销售",
		4916 : "预定部主管",
		4917 : "预定员",
		4903 : "大堂经理",
		4905 : "酒店前台",
		4912 : "宴会管理",
		4915 : "宾客服务经理",
		4904 : "楼面经理",
		4906 : "客房服务员/楼面服务员",
		4918 : "健身房服务",
		4907 : "行李员",
		4914 : "管家部经理/主管",
		4908 : "清洁服务人员",
		4919 : "旅游产品销售",
		4920 : "行程管理/计调",
		4921 : "签证专员",
		4909 : "导游/旅行顾问",
		4910 : "票务",
		4913 : "机场代表",
		4911 : "其他",
		5000 : "美容保健",
		5018 : "美容店长",
		5016 : "美容培训师/导师",
		5001 : "美容顾问",
		5019 : "美容师",
		5002 : "美容助理",
		5013 : "彩妆培训师",
		5014 : "专柜彩妆顾问(BA)",
		5020 : "化妆师",
		5021 : "造型师",
		5022 : "美发店长",
		5004 : "发型师",
		5005 : "发型助理/学徒",
		5006 : "美甲师",
		5017 : "美体师",
		5003 : "瘦身顾问",
		5023 : "SPA 技师",
		5007 : "按摩",
		5024 : "足疗",
		5010 : "宠物护理/美容",
		5011 : "其他",
		5100 : "百货零售",
		5101 : "卖场经理/店长",
		5112 : "品类经理",
		5114 : "品牌/连锁招商管理",
		5115 : "奢侈品业务",
		5102 : "店员/营业员",
		5116 : "珠宝销售顾问",
		5117 : "督导/巡店",
		5105 : "导购员",
		5118 : "促销员",
		5103 : "收银主管",
		5119 : "收银员",
		5104 : "陈列员",
		5120 : "收货员",
		5121 : "理货员",
		5113 : "安防主管",
		5108 : "防损员/内保",
		5109 : "西点师/面包糕点加工",
		5110 : "生鲜食品加工/处理",
		5111 : "熟食加工",
		5106 : "兼职店员",
		5107 : "其他",
		1800 : "交通运输服务",
		1822 : "飞机机长/副机长",
		1823 : "空乘人员",
		1825 : "列车/地铁车长",
		1827 : "船长/副船长",
		1810 : "商务司机",
		1830 : "客运司机",
		1831 : "货运司机",
		1832 : "出租车司机",
		1833 : "班车司机",
		1826 : "列车/地铁司机",
		1835 : "特种车司机",
		1836 : "叉车司机",
		1837 : "铲车司机",
		1838 : "吊车司机",
		1839 : "驾校教练",
		1840 : "代驾",
		1824 : "地勤人员",
		1801 : "乘务员",
		1828 : "船员",
		1829 : "其他",
		5200 : "家政保洁",
		5206 : "家政服务/保姆",
		5209 : "月嫂",
		5210 : "育婴师/保育员",
		5211 : "护工",
		5205 : "清洁工",
		5212 : "钟点工",
		5213 : "洗衣工",
		5214 : "送水工",
		5202 : "保镖",
		5215 : "空调维修",
		5216 : "家电维修",
		5203 : "寻呼员/话务员",
		5207 : "其他",
		1500 : "公务员",
		1501 : "公务员",
		2000 : "翻译",
		2001 : "英语翻译",
		2002 : "日语翻译",
		2003 : "德语翻译",
		2004 : "法语翻译",
		2005 : "俄语翻译",
		2010 : "意大利语翻译",
		2006 : "西班牙语翻译",
		2011 : "葡萄牙语翻译",
		2009 : "阿拉伯语翻译",
		2007 : "韩语/朝鲜语翻译",
		2012 : "泰语翻译",
		2013 : "中国方言翻译",
		2008 : "其他语种翻译",
		1600 : "在校学生",
		1605 : "研究生",
		1602 : "大学/大专应届毕业生",
		1601 : "中专/职校生",
		1604 : "其他",
		1700 : "储备干部/培训生/实习生",
		1702 : "储备干部",
		1701 : "培训生",
		1703 : "实习生",
		5300 : "兼职",
		5301 : "兼职",
		5600 : "环保",
		5601 : "环保工程师",
		5604 : "环境影响评价工程师",
		5609 : "生态治理/规划",
		5605 : "环保检测",
		5606 : "水质检测员",
		5602 : "水处理工程师",
		5607 : "固废工程师",
		5608 : "废气处理工程师",
		5603 : "其它",
		5800 : "农/林/牧/渔",
		5801 : "养殖部主管",
		5802 : "场长(农/林/牧/渔业)",
		5803 : "农艺师",
		5804 : "畜牧师",
		5805 : "饲养员",
		5808 : "农业技术员",
		5806 : "动物营养/饲料研发",
		5807 : "其他",
		6100 : "网店淘宝",
		6101 : "网店/淘宝店长",
		6102 : "网店/淘宝运营",
		6103 : "网店店铺管理员",
		6104 : "网店/淘宝客服",
		6105 : "店铺推广",
		6106 : "网店美工",
		6107 : "网店模特",
		6108 : "其他",
		6200 : "机械机床",
		6201 : "数控操机",
		6202 : "数控编程",
		6203 : "机修工",
		6204 : "折弯工",
		6205 : "车工",
		6206 : "磨工",
		6207 : "铣工",
		6208 : "冲压工",
		6209 : "刨工",
		6210 : "钳工",
		6211 : "钻工",
		6212 : "镗工",
		6213 : "铆工",
		6214 : "钣金工",
		6215 : "抛光工",
		6216 : "切割技工",
		6217 : "模具工",
		6218 : "炼胶工",
		6219 : "硫化工",
		6220 : "吹膜工",
		6221 : "注塑工",
		6222 : "其他",
		6300 : "印刷包装",
		6301 : "印刷工",
		6302 : "校对/录入",
		6304 : "调色员",
		6305 : "烫金工",
		6306 : "晒版员",
		6307 : "印刷排版/制版",
		6308 : "装订工",
		6309 : "印刷机械机长",
		6310 : "数码直印/菲林输出",
		6311 : "调墨技师",
		6312 : "电分操作员",
		6313 : "打稿机操作员",
		6314 : "切纸机操作工",
		6315 : "裱胶工",
		6316 : "压痕工",
		6317 : "复卷工",
		6318 : "其他",
		6400 : "运动健身",
		6401 : "健身顾问/教练",
		6402 : "瑜伽老师",
		6403 : "舞蹈老师",
		6404 : "游泳教练",
		6405 : "救生员",
		6406 : "高尔夫教练",
		6407 : "体育运动教练",
		6408 : "其他",
		6500 : "休闲娱乐",
		6501 : "司仪",
		6502 : "婚礼/庆典策划服务",
		6503 : "DJ",
		6504 : "驻唱/歌手",
		6505 : "舞蹈演员",
		6506 : "模特",
		6507 : "演员/群众演员",
		6509 : "娱乐领班",
		6510 : "娱乐服务员",
		6511 : "前台迎宾",
		6508 : "其他",
		1900 : "其他",
		1902 : "驯兽师/助理驯兽师",
		1903 : "志愿者/社会工作者",
		1901 : "其他"
	}
} ]);