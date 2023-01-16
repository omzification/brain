(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    g = g['toLowerCase']();
    var i = function () {
        var r = this['get']('data');
        r['updateText'](r['translateObjs'][f]);
    };
    var j = function (s) {
        var t = s['data']['nextSelectedIndex'];
        if (t >= 0x0) {
            var u = s['source']['get']('items')[t];
            var v = function () {
                u['unbind']('start', v, this);
                i['call'](this);
            };
            u['bind']('start', v, this);
        } else
            i['call'](this);
    };
    var k = function (w) {
        return function (x) {
            if (w in x) {
                i['call'](this);
            }
        }['bind'](this);
    };
    var l = function (y, z) {
        return function (A, B) {
            if (y == A && z in B) {
                i['call'](this);
            }
        }['bind'](this);
    };
    var m = function (C, D, E) {
        for (var F = 0x0; F < C['length']; ++F) {
            var G = C[F];
            var H = G['get']('selectedIndex');
            if (H >= 0x0) {
                var I = D['split']('.');
                var J = G['get']('items')[H];
                if (E !== undefined && !E['call'](this, J))
                    continue;
                for (var K = 0x0; K < I['length']; ++K) {
                    if (J == undefined)
                        return '';
                    J = 'get' in J ? J['get'](I[K]) : J[I[K]];
                }
                return J;
            }
        }
        return '';
    };
    var n = function (L) {
        var M = L['get']('player');
        return M !== undefined && M['get']('viewerArea') == this['getMainViewer']();
    };
    switch (g) {
    case 'title':
    case 'subtitle':
        var p = function () {
            switch (g) {
            case 'title':
                return 'media.label';
            case 'subtitle':
                return 'media.data.subtitle';
            }
        }();
        if (p) {
            return function () {
                var N = this['_getPlayListsWithViewer'](this['getMainViewer']());
                if (!h) {
                    for (var O = 0x0; O < N['length']; ++O) {
                        N[O]['bind']('changing', j, this);
                    }
                    h = !![];
                }
                return m['call'](this, N, p, n);
            };
        }
        break;
    default:
        if (g['startsWith']('quiz.') && 'Quiz' in TDV) {
            var q = undefined;
            var p = function () {
                switch (g) {
                case 'quiz.questions.answered':
                    return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                case 'quiz.question.count':
                    return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                case 'quiz.items.found':
                    return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                case 'quiz.item.count':
                    return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                case 'quiz.score':
                    return TDV['Quiz']['PROPERTY']['SCORE'];
                case 'quiz.score.total':
                    return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                case 'quiz.time.remaining':
                    return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                case 'quiz.time.elapsed':
                    return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                case 'quiz.time.limit':
                    return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                case 'quiz.media.items.found':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                case 'quiz.media.item.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                case 'quiz.media.questions.answered':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                case 'quiz.media.question.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                case 'quiz.media.score':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                case 'quiz.media.score.total':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                case 'quiz.media.index':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                case 'quiz.media.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                case 'quiz.media.visited':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                default:
                    var P = /quiz\.([\w_]+)\.(.+)/['exec'](g);
                    if (P) {
                        q = P[0x1];
                        switch ('quiz.' + P[0x2]) {
                        case 'quiz.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                        case 'quiz.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                        case 'quiz.media.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                        case 'quiz.media.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                        case 'quiz.media.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                        case 'quiz.media.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                        case 'quiz.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                        case 'quiz.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                        case 'quiz.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                        case 'quiz.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                        case 'quiz.media.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                        case 'quiz.media.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                        }
                    }
                }
            }();
            if (p) {
                return function () {
                    var Q = this['get']('data')['quiz'];
                    if (Q) {
                        if (!h) {
                            if (q != undefined)
                                if (q == 'global') {
                                    var S = this['get']('data')['quizConfig'];
                                    var U = S['objectives'];
                                    for (var W = 0x0, Y = U['length']; W < Y; ++W) {
                                        Q['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], l['call'](this, U[W]['id'], p), this);
                                    }
                                } else {
                                    Q['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], l['call'](this, q, p), this);
                                }
                            else
                                Q['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], k['call'](this, p), this);
                            h = !![];
                        }
                        try {
                            var Z = 0x0;
                            if (q != undefined) {
                                if (q == 'global') {
                                    var S = this['get']('data')['quizConfig'];
                                    var U = S['objectives'];
                                    for (var W = 0x0, Y = U['length']; W < Y; ++W) {
                                        Z += Q['getObjective'](U[W]['id'], p);
                                    }
                                } else {
                                    Z = Q['getObjective'](q, p);
                                }
                            } else {
                                Z = Q['get'](p);
                                if (p == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                    Z += 0x1;
                            }
                            return Z;
                        } catch (a0) {
                            return undefined;
                        }
                    }
                };
            }
        }
        break;
    }
    return '';
}
function createQuizConfig(player, a1) {
    var a2 = {};
    a2['player'] = player;
    a2['playList'] = a1;
    function a3(a6) {
        for (var a7 = 0x0; a7 < a6['length']; ++a7) {
            var a8 = a6[a7];
            if ('id' in a8)
                player[a8['id']] = a8;
        }
    }
    if (a2['questions']) {
        a3(a2['questions']);
        for (var a4 = 0x0; a4 < a2['questions']['length']; ++a4) {
            var a5 = a2['questions'][a4];
            a3(a5['options']);
        }
    }
    if (a2['objectives']) {
        a3(a2['objectives']);
    }
    if (a2['califications']) {
        a3(a2['califications']);
    }
    if (a2['score']) {
        player[a2['score']['id']] = a2['score'];
    }
    if (a2['question']) {
        player[a2['question']['id']] = a2['question'];
    }
    if (a2['timeout']) {
        player[a2['timeout']['id']] = a2['timeout'];
    }
    player['get']('data')['translateObjs'] = translateObjs;
    return a2;
}
var script = {"start":"this.init()","propagateClick":false,"scrollBarWidth":10,"backgroundColorDirection":"vertical","height":"100%","desktopMipmappingEnabled":false,"paddingLeft":0,"scrollBarMargin":2,"vrPolyfillScale":0.75,"backgroundOpacity":1,"scrollBarVisible":"rollOver","mediaActivationMode":"window","scrollBarColor":"#000000","defaultVRPointer":"laser","paddingRight":0,"mouseWheelEnabled":true,"overflow":"hidden","paddingTop":0,"class":"Player","paddingBottom":0,"borderSize":0,"gap":10,"defaultMenu":["fullscreen","mute","rotation"],"layout":"absolute","scripts":{"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"unregisterKey":TDV.Tour.Script.unregisterKey,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"cloneCamera":TDV.Tour.Script.cloneCamera,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"cloneBindings":TDV.Tour.Script.cloneBindings,"resumePlayers":TDV.Tour.Script.resumePlayers,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"showWindow":TDV.Tour.Script.showWindow,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"registerKey":TDV.Tour.Script.registerKey,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"textToSpeech":TDV.Tour.Script.textToSpeech,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"playAudioList":TDV.Tour.Script.playAudioList,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"openLink":TDV.Tour.Script.openLink,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"init":TDV.Tour.Script.init,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"quizFinish":TDV.Tour.Script.quizFinish,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"quizStart":TDV.Tour.Script.quizStart,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"isPanorama":TDV.Tour.Script.isPanorama,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"initQuiz":TDV.Tour.Script.initQuiz,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"initAnalytics":TDV.Tour.Script.initAnalytics,"quizShowScore":TDV.Tour.Script.quizShowScore,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"historyGoForward":TDV.Tour.Script.historyGoForward,"showPopupImage":TDV.Tour.Script.showPopupImage,"historyGoBack":TDV.Tour.Script.historyGoBack,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"getMediaByName":TDV.Tour.Script.getMediaByName,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"setValue":TDV.Tour.Script.setValue,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"mixObject":TDV.Tour.Script.mixObject,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getPixels":TDV.Tour.Script.getPixels,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setLocale":TDV.Tour.Script.setLocale,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getMainViewer":TDV.Tour.Script.getMainViewer,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getComponentByName":TDV.Tour.Script.getComponentByName,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"executeJS":TDV.Tour.Script.executeJS,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"existsKey":TDV.Tour.Script.existsKey,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"setMapLocation":TDV.Tour.Script.setMapLocation,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"shareSocial":TDV.Tour.Script.shareSocial,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"downloadFile":TDV.Tour.Script.downloadFile,"getOverlays":TDV.Tour.Script.getOverlays,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getKey":TDV.Tour.Script.getKey,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"translate":TDV.Tour.Script.translate,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"clone":TDV.Tour.Script.clone},"width":"100%","mobileMipmappingEnabled":false,"backgroundColor":["#FFFFFF"],"contentOpaque":false,"horizontalAlign":"left","backgroundPreloadEnabled":true,"definitions": [{"subtitlesTextShadowBlurRadius":0,"toolTipShadowOpacity":1,"progressBarBorderColor":"#000000","data":{"name":"Main Viewer"},"playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesVerticalAlign":"bottom","paddingLeft":0,"progressLeft":0,"playbackBarHeadShadowHorizontalLength":0,"progressBarBackgroundColorRatios":[0],"height":"100%","subtitlesTextShadowOpacity":1,"paddingRight":0,"subtitlesBorderSize":0,"paddingTop":0,"class":"ViewerArea","progressBackgroundColorDirection":"vertical","toolTipFontStyle":"normal","subtitlesFontColor":"#FFFFFF","subtitlesFontFamily":"Arial","surfaceReticleSelectionColor":"#FFFFFF","paddingBottom":0,"playbackBarHeadShadowBlurRadius":3,"toolTipBorderColor":"#767676","playbackBarHeadShadowOpacity":0.7,"surfaceReticleSelectionOpacity":1,"toolTipTextShadowBlurRadius":3,"playbackBarLeft":0,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarBorderColor":"#FFFFFF","toolTipDisplayTime":600,"playbackBarHeadHeight":15,"toolTipShadowHorizontalLength":0,"minHeight":50,"toolTipBorderSize":1,"minWidth":100,"toolTipTextShadowOpacity":0,"playbackBarHeadShadowColor":"#000000","toolTipPaddingTop":4,"progressBarBackgroundColor":["#3399FF"],"borderRadius":0,"progressBorderColor":"#000000","progressBackgroundColor":["#FFFFFF"],"playbackBarHeadBorderSize":0,"subtitlesPaddingTop":5,"subtitlesFontWeight":"normal","playbackBarHeadBackgroundColorRatios":[0,1],"toolTipFontSize":"1.11vmin","propagateClick":false,"playbackBarHeadOpacity":1,"playbackBarBorderRadius":0,"playbackBarHeadShadow":true,"transitionMode":"blending","toolTipBorderRadius":3,"progressBarOpacity":1,"vrPointerSelectionTime":2000,"toolTipShadowBlurRadius":3,"playbackBarProgressBorderColor":"#000000","toolTipFontFamily":"Arial","displayTooltipInSurfaceSelection":true,"subtitlesShadow":false,"translationTransitionDuration":1000,"subtitlesBottom":50,"subtitlesPaddingRight":5,"playbackBarHeadBorderRadius":0,"progressBottom":0,"subtitlesPaddingLeft":5,"vrPointerSelectionColor":"#FF6600","toolTipFontWeight":"normal","progressBackgroundOpacity":1,"displayTooltipInTouchScreens":true,"playbackBarOpacity":1,"toolTipPaddingLeft":6,"subtitlesTop":0,"playbackBarProgressOpacity":1,"doubleClickAction":"toggle_fullscreen","playbackBarHeadBackgroundColor":["#111111","#666666"],"progressHeight":10,"progressBorderSize":0,"progressBarBorderRadius":0,"playbackBarBottom":5,"playbackBarHeadBorderColor":"#000000","playbackBarBorderSize":0,"toolTipTextShadowColor":"#000000","borderSize":0,"subtitlesTextShadowVerticalLength":1,"subtitlesTextShadowColor":"#000000","playbackBarProgressBackgroundColorDirection":"vertical","subtitlesOpacity":1,"progressBackgroundColorRatios":[0],"toolTipOpacity":1,"subtitlesFontSize":"3vmin","toolTipPaddingRight":6,"width":"100%","playbackBarBackgroundColor":["#FFFFFF"],"vrPointerColor":"#FFFFFF","toolTipShadowVerticalLength":0,"playbackBarHeight":10,"progressBarBorderSize":0,"subtitlesTextShadowHorizontalLength":1,"subtitlesPaddingBottom":5,"subtitlesGap":0,"toolTipShadowSpread":0,"firstTransitionDuration":0,"subtitlesBackgroundOpacity":0.2,"toolTipShadowColor":"#333138","playbackBarHeadBackgroundColorDirection":"vertical","toolTipFontColor":"#606060","subtitlesBackgroundColor":"#000000","playbackBarHeadWidth":6,"playbackBarBackgroundOpacity":1,"surfaceReticleColor":"#FFFFFF","playbackBarProgressBorderSize":0,"progressRight":0,"shadow":false,"playbackBarBackgroundColorDirection":"vertical","subtitlesEnabled":true,"subtitlesTextDecoration":"none","id":"MainViewer","transitionDuration":500,"toolTipPaddingBottom":4,"playbackBarRight":0,"toolTipBackgroundColor":"#F6F6F6","subtitlesBorderColor":"#FFFFFF","subtitlesHorizontalAlign":"center","progressBarBackgroundColorDirection":"vertical","playbackBarHeadShadowVerticalLength":0,"progressOpacity":1,"progressBorderRadius":0,"playbackBarProgressBorderRadius":0,"surfaceReticleOpacity":0.6,"toolTipHorizontalAlign":"center"},{"hoverFactor":0,"class":"PanoramaCamera","initialPosition":{"yaw":-23.58,"class":"PanoramaCameraPosition","pitch":-6.09},"id":"panorama_2498E6ED_2E49_E396_41BE_F7752A07787B_camera","automaticZoomSpeed":10,"initialSequence":"this.sequence_27A83D92_2E49_E1B2_41AB_A83B8455E496"},{"surfaceSelectionEnabled":false,"class":"PanoramaPlayer","aaEnabled":true,"arrowKeysAction":"translate","zoomEnabled":true,"mouseControlMode":"drag_rotation","gyroscopeVerticalDraggingEnabled":true,"displayPlaybackBar":true,"id":"MainViewerPanoramaPlayer","viewerArea":"this.MainViewer","touchControlMode":"drag_rotation"},{"id":"mainPlayList","items":[{"media":"this.panorama_250D8776_2E48_A173_41A1_322B20EC3051","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_250D8776_2E48_A173_41A1_322B20EC3051_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","class":"PanoramaPlayListItem"},{"media":"this.panorama_2498E6ED_2E49_E396_41BE_F7752A07787B","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_2498E6ED_2E49_E396_41BE_F7752A07787B_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)","class":"PanoramaPlayListItem","end":"this.trigger('tourEnded')"}],"class":"PlayList"},{"showEffect":{"easing":"cubic_in_out","class":"FadeInEffect","duration":500},"veilColorRatios":[0,1],"closeButtonRollOverBackgroundColor":[],"height":"90%","headerBorderSize":0,"headerBackgroundOpacity":0,"paddingLeft":0,"closeButtonIconLineWidth":2,"closeButtonBorderSize":0,"titlePaddingRight":5,"backgroundOpacity":1,"scrollBarVisible":"rollOver","shadowColor":"#000000","scrollBarColor":"#000000","closeButtonPaddingLeft":0,"paddingRight":0,"headerVerticalAlign":"middle","modal":true,"paddingTop":0,"class":"Window","titleFontStyle":"normal","titleFontWeight":"normal","closeButtonPressedBackgroundColorRatios":[],"bodyBackgroundColorDirection":"vertical","paddingBottom":0,"headerPaddingBottom":5,"gap":10,"footerBackgroundOpacity":0,"closeButtonRollOverBorderColor":"#000000","closeButtonPaddingTop":0,"footerBackgroundColor":["#FFFFFF","#EEEEEE","#DDDDDD"],"veilColorDirection":"horizontal","headerBackgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"bodyPaddingRight":0,"layout":"vertical","footerBackgroundColorRatios":[0,0.9,1],"verticalAlign":"middle","headerBackgroundColorDirection":"vertical","backgroundColor":[],"children":["this.WebFrame_3F3EAAE9_2E49_639E_41AF_4FFAAA0BE204"],"horizontalAlign":"center","closeButtonIconColor":"#B2B2B2","shadowBlurRadius":6,"titlePaddingBottom":5,"veilColor":["#000000","#000000"],"closeButtonBackgroundOpacity":0,"backgroundColorRatios":[],"minHeight":0,"headerPaddingTop":10,"minWidth":0,"veilHideEffect":{"easing":"cubic_in_out","class":"FadeOutEffect","duration":500},"titleFontFamily":"Arial","borderRadius":5,"footerHeight":5,"bodyBackgroundOpacity":0,"closeButtonPressedBackgroundColor":[],"scrollBarOpacity":0.5,"propagateClick":false,"scrollBarWidth":10,"footerBorderSize":0,"scrollBarMargin":2,"backgroundColorDirection":"vertical","titleFontSize":"1.29vmin","closeButtonPressedBorderColor":"#000000","veilOpacity":0.4,"closeButtonRollOverIconColor":"#FFFFFF","bodyPaddingBottom":0,"bodyPaddingLeft":0,"titleHorizontalAlign":"left","closeButtonRollOverBackgroundColorRatios":[],"shadowVerticalLength":0,"closeButtonPaddingRight":0,"bodyBackgroundColorRatios":[0,0.5,1],"bodyBackgroundColor":["#FFFFFF","#DDDDDD","#FFFFFF"],"closeButtonPressedBorderSize":0,"closeButtonPressedIconColor":"#FFFFFF","closeButtonPressedIconLineWidth":3,"bodyBorderSize":0,"closeButtonPaddingBottom":0,"closeButtonRollOverBackgroundOpacity":0,"shadowSpread":1,"overflow":"scroll","headerBorderColor":"#000000","closeButtonBackgroundColorRatios":[],"titlePaddingTop":5,"bodyPaddingTop":0,"headerPaddingRight":0,"footerBackgroundColorDirection":"vertical","closeButtonIconWidth":20,"borderSize":0,"closeButtonPressedBackgroundOpacity":0,"closeButtonBorderRadius":11,"veilShowEffect":{"easing":"cubic_in_out","class":"FadeInEffect","duration":500},"footerBorderColor":"#000000","width":"90%","titlePaddingLeft":5,"closeButtonIconHeight":20,"contentOpaque":false,"shadowOpacity":0.5,"headerPaddingLeft":10,"closeButtonRollOverIconLineWidth":2,"shadowHorizontalLength":3,"id":"window_20AB95A8_2E48_A19E_41C5_FCA1A465621F","closeButtonBorderColor":"#000000","shadow":true,"bodyBorderColor":"#000000","closeButtonBackgroundColor":[],"closeButtonRollOverBorderSize":0,"hideEffect":{"easing":"cubic_in_out","class":"FadeOutEffect","duration":500},"titleFontColor":"#000000","toolTipHorizontalAlign":"center","titleTextDecoration":"none","headerBackgroundColorRatios":[0,0.1,1],"data":{"name":"Window6497"}},{"hoverFactor":0,"class":"PanoramaCamera","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"id":"panorama_250D8776_2E48_A173_41A1_322B20EC3051_camera","automaticZoomSpeed":10,"initialSequence":"this.sequence_27A580B9_2E48_9FFE_41BA_95B20D7CAD41"},{"vfov":180,"adjacentPanoramas":[{"panorama":"this.panorama_250D8776_2E48_A173_41A1_322B20EC3051","distance":7.45,"yaw":19.55,"class":"AdjacentPanorama","data":{"overlayID":"overlay_20DFA19B_2E49_A1B2_41BF_CCC840FD6335"},"backwardYaw":42.11,"select":"this.overlay_20DFA19B_2E49_A1B2_41BF_CCC840FD6335.get('areas').forEach(function(a){ a.trigger('click') })"}],"partial":false,"hfov":360,"frames":[{"thumbnailUrl":"media/panorama_2498E6ED_2E49_E396_41BE_F7752A07787B_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"tags":"ondemand","class":"TiledImageResourceLevel","colCount":12,"width":6144,"rowCount":2,"height":1024,"url":"media/panorama_2498E6ED_2E49_E396_41BE_F7752A07787B_0/{face}/0/{row}_{column}.jpg"},{"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","colCount":6,"width":3072,"rowCount":1,"height":512,"url":"media/panorama_2498E6ED_2E49_E396_41BE_F7752A07787B_0/{face}/1/{row}_{column}.jpg"}],"class":"ImageResource"}}],"id":"panorama_2498E6ED_2E49_E396_41BE_F7752A07787B","hfovMin":"150%","overlays":["this.overlay_20DFA19B_2E49_A1B2_41BF_CCC840FD6335"],"class":"Panorama","label":trans('panorama_2498E6ED_2E49_E396_41BE_F7752A07787B.label'),"pitch":0,"thumbnailUrl":"media/panorama_2498E6ED_2E49_E396_41BE_F7752A07787B_t.jpg","hfovMax":130,"data":{"label":"untitled 2"}},{"vfov":180,"adjacentPanoramas":[{"panorama":"this.panorama_2498E6ED_2E49_E396_41BE_F7752A07787B","distance":100,"yaw":42.11,"class":"AdjacentPanorama","data":{"overlayID":"overlay_22A6C429_2E4B_669E_41BC_48F0810BFC00"},"backwardYaw":19.55,"select":"this.overlay_22A6C429_2E4B_669E_41BC_48F0810BFC00.get('areas').forEach(function(a){ a.trigger('click') })"}],"partial":false,"hfov":360,"frames":[{"thumbnailUrl":"media/panorama_250D8776_2E48_A173_41A1_322B20EC3051_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"tags":"ondemand","class":"TiledImageResourceLevel","colCount":12,"width":6144,"rowCount":2,"height":1024,"url":"media/panorama_250D8776_2E48_A173_41A1_322B20EC3051_0/{face}/0/{row}_{column}.jpg"},{"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","colCount":6,"width":3072,"rowCount":1,"height":512,"url":"media/panorama_250D8776_2E48_A173_41A1_322B20EC3051_0/{face}/1/{row}_{column}.jpg"}],"class":"ImageResource"}}],"id":"panorama_250D8776_2E48_A173_41A1_322B20EC3051","hfovMin":"150%","overlays":["this.overlay_22A6C429_2E4B_669E_41BC_48F0810BFC00","this.overlay_207586EC_2E49_6396_41C0_3CCEC5BB640C","this.overlay_21E211EB_2E58_E192_41B7_A2DC3997093A"],"class":"Panorama","label":trans('panorama_250D8776_2E48_A173_41A1_322B20EC3051.label'),"pitch":0,"thumbnailUrl":"media/panorama_250D8776_2E48_A173_41A1_322B20EC3051_t.jpg","hfovMax":130,"data":{"label":"untitled"}},{"id":"sequence_27A83D92_2E49_E1B2_41AB_A83B8455E496","restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"linear","yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"cubic_out","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96}]},{"propagateClick":false,"insetBorder":false,"backgroundColorDirection":"vertical","height":"100%","paddingLeft":0,"backgroundOpacity":1,"paddingRight":0,"paddingTop":0,"class":"WebFrame","paddingBottom":0,"borderSize":0,"width":"100%","backgroundColor":[],"url":trans('WebFrame_3F3EAAE9_2E49_639E_41AF_4FFAAA0BE204.url'),"id":"WebFrame_3F3EAAE9_2E49_639E_41AF_4FFAAA0BE204","backgroundColorRatios":[],"minHeight":0,"minWidth":0,"shadow":false,"scrollEnabled":true,"borderRadius":0,"data":{"name":"WebFrame10401"},"toolTipHorizontalAlign":"center"},{"id":"sequence_27A580B9_2E48_9FFE_41BA_95B20D7CAD41","restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"linear","yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"cubic_out","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96}]},{"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_20EDC1B1_2E49_A18E_41BE_5BCD9844DE5B"],"class":"HotspotPanoramaOverlay","data":{"hasPanoramaAction":true,"label":"wtf icon"},"useHandCursor":true,"id":"overlay_20DFA19B_2E49_A1B2_41BF_CCC840FD6335","items":[{"distance":50,"vertices":[{"yaw":15.46,"class":"PanoramaPoint","pitch":-9.82},{"yaw":20.51,"class":"PanoramaPoint","pitch":-7.38},{"yaw":23.06,"class":"PanoramaPoint","pitch":-15.33},{"yaw":18.53,"class":"PanoramaPoint","pitch":-18.38}],"class":"QuadHotspotPanoramaOverlayImage","image":"this.res_219F0D15_2E49_66B6_4190_7B3DFD038B9C","data":{"label":"wtf icon"}}],"maps":[]},{"areas":["this.HotspotPanoramaOverlayArea_228AA65A_2E4B_62B2_41C2_66D27B281484"],"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"useHandCursor":true,"id":"overlay_22A6C429_2E4B_669E_41BC_48F0810BFC00","items":[{"scaleMode":"fit_inside","yaw":42.11,"class":"HotspotPanoramaOverlayImage","vfov":8.39,"distance":50,"verticalAlign":"middle","image":"this.res_219F0D15_2E49_66B6_4190_7B3DFD038B9C","horizontalAlign":"center","hfov":7,"data":{"label":"wtf icon"},"pitch":9.55}],"maps":[],"data":{"label":"wtf icon"}},{"areas":["this.HotspotPanoramaOverlayArea_2004A6F1_2E49_638E_41C2_B0A566B675B6"],"class":"HotspotPanoramaOverlay","data":{"label":"Polygon"},"useHandCursor":true,"id":"overlay_207586EC_2E49_6396_41C0_3CCEC5BB640C","rollOverDisplay":true,"items":[{"yaw":26.73,"vfov":17.14,"distance":50,"class":"HotspotPanoramaOverlayImage","image":{"levels":[{"url":"media/panorama_250D8776_2E48_A173_41A1_322B20EC3051_HS_l7akb6lm.png","class":"ImageResourceLevel","height":92,"width":92}],"class":"ImageResource"},"hfov":17.23,"pitch":-27.14,"data":{"label":"Polygon"}}],"maps":[]},{"width":1280,"data":{"label":"Web"},"contentInteractive":true,"vertices":[{"yaw":24.92,"class":"PanoramaPoint","pitch":-19.79},{"yaw":33.26,"class":"PanoramaPoint","pitch":-22.73},{"yaw":32.91,"class":"PanoramaPoint","pitch":-30.15},{"yaw":24.51,"class":"PanoramaPoint","pitch":-26.34}],"class":"QuadFramePanoramaOverlay","height":720,"useHandCursor":false,"id":"overlay_21E211EB_2E58_E192_41B7_A2DC3997093A","url":trans('overlay_21E211EB_2E58_E192_41B7_A2DC3997093A.url')},{"id":"HotspotPanoramaOverlayArea_20EDC1B1_2E49_A18E_41BE_5BCD9844DE5B","click":"this.mainPlayList.set('selectedIndex', 0)","mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"levels":[{"url":"media/res_219F0D15_2E49_66B6_4190_7B3DFD038B9C_0.png","class":"ImageResourceLevel","height":74,"width":58}],"id":"res_219F0D15_2E49_66B6_4190_7B3DFD038B9C","class":"ImageResource"},{"id":"HotspotPanoramaOverlayArea_228AA65A_2E4B_62B2_41C2_66D27B281484","click":"this.mainPlayList.set('selectedIndex', 1)","mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"id":"HotspotPanoramaOverlayArea_2004A6F1_2E49_638E_41C2_B0A566B675B6","click":"this.WebFrame_3F3EAAE9_2E49_639E_41AF_4FFAAA0BE204.set('url', this.translate('PopupWebFrameBehaviour_20A535AA_2E48_A192_4192_FC419656131D.url')); this.showWindow(this.window_20AB95A8_2E48_A19E_41C5_FCA1A465621F, null, false)","mapColor":"image","class":"HotspotPanoramaOverlayArea"}],"id":"rootPlayer","backgroundColorRatios":[0],"minHeight":0,"verticalAlign":"top","children":["this.MainViewer"],"minWidth":0,"shadow":false,"borderRadius":0,"downloadEnabled":false,"scrollBarOpacity":0.5,"data":{"locales":{"en":"locale/en.txt"},"name":"Player423","textToSpeechConfig":{"speechOnQuizQuestion":false,"speechOnTooltip":false,"volume":1,"speechOnInfoWindow":false,"stopBackgroundAudio":false,"pitch":1,"rate":1},"defaultLocale":"en"},"toolTipHorizontalAlign":"center"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['history'] = {};
script['scripts']['createQuizConfig'] = createQuizConfig;
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2022.1.30.js.map
})();
//Generated with v2022.1.30, Mon Oct 31 2022