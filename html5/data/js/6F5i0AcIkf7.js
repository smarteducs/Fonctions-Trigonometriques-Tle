﻿window.globalProvideData('slide', '{"title":"QUESTION 24","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":25,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide25","width":720,"height":540,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":100,"stop":0}]}},"id":"6F5i0AcIkf7","actionGroups":{"ActGrpOnSubmitButtonClick":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"6ooL9zPhwQv.5qb0VjJv7Dv.#_checked","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"6ooL9zPhwQv.5br05MkX9YR.#_checked","typea":"var","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"eval_interaction","id":"_this.5VO9nvhZEDm"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_699zQP6Y3Dj.InvalidPromptSlide"}}]}]},"ReviewInt_6ooL9zPhwQv":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6ooL9zPhwQv.5qb0VjJv7Dv"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6ooL9zPhwQv.5br05MkX9YR"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5VO9nvhZEDm.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6ooL9zPhwQv_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6ooL9zPhwQv_IncorrectReview"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6ooL9zPhwQv","typea":"var","valueb":"6R6tODJoFbb","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00001000101"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6R6tODJoFbb.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6ooL9zPhwQv"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6R6tODJoFbb.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6ooL9zPhwQv"}]}]}]},"ReviewIntCorrectIncorrect_6ooL9zPhwQv":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6ooL9zPhwQv.5qb0VjJv7Dv.$OnStage","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6ooL9zPhwQv.5qb0VjJv7Dv"}}]},{"kind":"adjustvar","variable":"6ooL9zPhwQv.5qb0VjJv7Dv._hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"6ooL9zPhwQv.5qb0VjJv7Dv._down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"6ooL9zPhwQv.5qb0VjJv7Dv._disabled","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"6ooL9zPhwQv.5qb0VjJv7Dv.ActGrpSetReviewState"},{"kind":"set_enabled","objRef":{"type":"string","value":"6ooL9zPhwQv.5qb0VjJv7Dv"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6ooL9zPhwQv.5br05MkX9YR"},"enabled":{"type":"boolean","value":false}}]},"AnsweredInt_6ooL9zPhwQv":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_6ooL9zPhwQv"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00001000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00001000101"}]}]},"DisableChoices_6ooL9zPhwQv":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"6ooL9zPhwQv.5qb0VjJv7Dv.ActGrpSetDisabledState"},{"kind":"exe_actiongroup","id":"6ooL9zPhwQv.5br05MkX9YR.ActGrpSetDisabledState"}]},"6ooL9zPhwQv_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"5VO9nvhZEDm.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.6R6tODJoFbb.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6ooL9zPhwQv"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5VO9nvhZEDm.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"5VO9nvhZEDm.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6ooL9zPhwQv"}]}]}]}]},"SetLayout_pxabnsnfns00001000101":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00001000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00001000101"}]}]},"NavigationRestrictionNextSlide_6F5i0AcIkf7":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.5gsWya89c33"}}]},"NavigationRestrictionPreviousSlide_6F5i0AcIkf7":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onslidestart","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_playerVars.#hasPrevHistory","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"enable_window_control","name":"previous","enable":false,"affectTabStop":true}]}]},{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbsnfns00001000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbsnfns00001000101"}]}]},{"kind":"onsubmitslide","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnSubmitButtonClick"}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_699zQP6Y3Dj","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_699zQP6Y3Dj","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6ooL9zPhwQv","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_6ooL9zPhwQv"}],"elseActions":[{"kind":"exe_actiongroup","id":"6ooL9zPhwQv_CheckAnswered"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6ooL9zPhwQv","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6ooL9zPhwQv","typea":"var","valueb":"6R6tODJoFbb","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6R6tODJoFbb"},"completed_slide_ref":{"type":"string","value":"_player.6X6Rb5IkbCT.6Av7at6PlxN"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_6ooL9zPhwQv","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6ooL9zPhwQv","typea":"var","valueb":"6R6tODJoFbb","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6R6tODJoFbb"},"completed_slide_ref":{"type":"string","value":"_player.6X6Rb5IkbCT.6Av7at6PlxN"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_6F5i0AcIkf7"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_6F5i0AcIkf7"}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":5000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6cRr3Rq13fy"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6PGao2r9fdx"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6ooL9zPhwQv"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6ooL9zPhwQv.5br05MkX9YR"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6ooL9zPhwQv.5qb0VjJv7Dv"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6QJnnioYET9"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6I0c7R4YQN7"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6KvCPkLiWAp"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":1,"id":"01","url":"story_content/6EfEhDaPozi_80_DX1440_DY1440.swf","type":"normal","altText":"backgroundpolitico.png","width":1440,"height":1080,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":270,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":false,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":720,"bottom":540,"altText":"backgroundpolitico.png","altTextOverridesText":true,"pngfb":false,"pr":{"l":"Lib","i":10}},"html5data":{"xPos":0,"yPos":0,"width":720,"height":540,"strokewidth":0}},"width":720,"height":540,"resume":true,"useHandCursor":true,"id":"6KvCPkLiWAp"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":0,"yPos":40,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":16,"rotateYPos":11,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":false,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":32,"bottom":23,"altText":"Rectangle 17 1","pngfb":false,"pr":{"l":"Lib","i":11}},"html5data":{"xPos":0,"yPos":0,"width":32,"height":23,"strokewidth":0}},"width":32,"height":22,"resume":true,"useHandCursor":true,"id":"6I0c7R4YQN7"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":248,"yPos":-2,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":236,"rotateYPos":271.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":472,"bottom":544,"altText":"Rectangle 2","pngfb":false,"pr":{"l":"Lib","i":65}},"html5data":{"xPos":0,"yPos":0,"width":472,"height":544,"strokewidth":0}},"width":472,"height":543,"resume":true,"useHandCursor":true,"id":"6cRr3Rq13fy"},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":19,"id":"01","url":"story_content/5fIOuu1Yuv5_80_DX1088_DY1088.jpg","type":"normal","altText":"Image 1.jpg","width":365,"height":594,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":-8,"yPos":-2,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":128,"rotateYPos":272,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":256,"bottom":544,"altText":"Image 1.jpg","pngfb":false,"pr":{"l":"Lib","i":66}},"html5data":{"xPos":0,"yPos":0,"width":256,"height":544,"strokewidth":0}},"width":256,"height":544,"resume":true,"useHandCursor":true,"id":"6PGao2r9fdx"},{"kind":"scrollarea","contentwidth":160,"contentheight":41,"objects":[{"kind":"shufflegroup","objects":[{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"6gk1VvQPPoW_184919785","id":"01","linkId":"txt__default_5br05MkX9YR","type":"acctext","xPos":10,"yPos":5,"xAccOffset":43,"yAccOffset":12,"width":65,"height":17,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Faux","style":{"fontFamily":"\\"Calibri Charset0_v2mWipD31519F7\\",\\"Calibri\\"","fontSize":10,"foregroundColor":"#FFFFFF","linkColor":"#FFFFFF","ascent":12.695,"descent":3.581,"leading":0,"underlinePosition":-1.51,"underlineThickness":0.872,"xHeight":6.191}}],"style":{"flowDirection":"leftToRight","tagType":"P"},"runs":[{"idx":0,"len":4,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Titillium Web","fontSize":12,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#C81221","linkColor":"#FFFFFF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":68,"bottom":29,"pngfb":false,"pr":{"l":"Lib","i":82}}}],"shapemaskId":"","xPos":192,"yPos":0,"tabIndex":7,"tabEnabled":true,"radioGroup":"Multiple Choice","xOffset":0,"yOffset":0,"rotateXPos":64,"rotateYPos":20.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":128,"bottom":41,"altText":"Faux","pngfb":false,"pr":{"l":"Lib","i":21}},"html5data":{"xPos":-1,"yPos":-1,"width":129,"height":42,"strokewidth":3}},"states":[{"kind":"state","name":"_default_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":128,"bottom":41,"altText":"Faux","pngfb":false,"pr":{"l":"Lib","i":21}},"html5data":{"xPos":-1,"yPos":-1,"width":129,"height":42,"strokewidth":3}}},{"kind":"state","name":"_default_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-1,"top":-1,"right":128,"bottom":41,"altText":"Faux","pngfb":false,"pr":{"l":"Lib","i":21}},"html5data":{"xPos":-1,"yPos":-1,"width":129,"height":42,"strokewidth":3}}},{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":128,"bottom":41,"altText":"Faux","pngfb":false,"pr":{"l":"Lib","i":23}},"html5data":{"xPos":-1,"yPos":-1,"width":129,"height":42,"strokewidth":3}}},{"kind":"state","name":"_default_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-1,"top":-1,"right":128,"bottom":41,"altText":"Faux","pngfb":false,"pr":{"l":"Lib","i":23}},"html5data":{"xPos":-1,"yPos":-1,"width":129,"height":42,"strokewidth":3}}},{"kind":"state","name":"_default_Down_Selected","data":{"hotlinkId":"","accState":24,"vectorData":{"left":-1,"top":-1,"right":128,"bottom":41,"altText":"Faux","pngfb":false,"pr":{"l":"Lib","i":23}},"html5data":{"xPos":-1,"yPos":-1,"width":129,"height":42,"strokewidth":3}}},{"kind":"state","name":"_default_Hover","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":128,"bottom":41,"altText":"Faux","pngfb":false,"pr":{"l":"Lib","i":25}},"html5data":{"xPos":-1,"yPos":-1,"width":129,"height":42,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":128,"bottom":41,"altText":"Faux","pngfb":false,"pr":{"l":"Lib","i":25}},"html5data":{"xPos":-1,"yPos":-1,"width":129,"height":42,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-1,"top":-1,"right":128,"bottom":41,"altText":"Faux","pngfb":false,"pr":{"l":"Lib","i":25}},"html5data":{"xPos":-1,"yPos":-1,"width":129,"height":42,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":128,"bottom":41,"altText":"Faux","pngfb":false,"pr":{"l":"Lib","i":26}},"html5data":{"xPos":-1,"yPos":-1,"width":129,"height":42,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-1,"top":-1,"right":128,"bottom":41,"altText":"Faux","pngfb":false,"pr":{"l":"Lib","i":26}},"html5data":{"xPos":-1,"yPos":-1,"width":129,"height":42,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Down_Selected","data":{"hotlinkId":"","accState":24,"vectorData":{"left":-1,"top":-1,"right":128,"bottom":41,"altText":"Faux","pngfb":false,"pr":{"l":"Lib","i":26}},"html5data":{"xPos":-1,"yPos":-1,"width":129,"height":42,"strokewidth":3}}}],"width":128,"height":41,"resume":true,"useHandCursor":true,"id":"5br05MkX9YR","variables":[{"kind":"variable","name":"_hover","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_down","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"exe_actiongroup","id":"ActGrpUnchecked"}]},"ActGrpUnchecked":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.5qb0VjJv7Dv.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.5qb0VjJv7Dv._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.5qb0VjJv7Dv"}}]}]},"ActGrpSetHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDisabledState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDownState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollover","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollout","actions":[{"kind":"exe_actiongroup","id":"ActGrpClearHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onpress","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetDownState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"ActGrpUnchecked"},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onreleaseoutside","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"6czb3kaqJDD_1686761686","id":"01","linkId":"txt__default_5qb0VjJv7Dv","type":"acctext","xPos":10,"yPos":5,"xAccOffset":43,"yAccOffset":12,"width":73,"height":17,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Vrai","style":{"fontFamily":"\\"Calibri Charset0_v2mWipD31519F7\\",\\"Calibri\\"","fontSize":10,"foregroundColor":"#FFFFFF","linkColor":"#FFFFFF","ascent":12.695,"descent":3.581,"leading":0,"underlinePosition":-1.51,"underlineThickness":0.872,"xHeight":6.191}}],"style":{"flowDirection":"leftToRight","tagType":"P"},"runs":[{"idx":0,"len":4,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Titillium Web","fontSize":12,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#C81221","linkColor":"#FFFFFF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":65,"bottom":29,"pngfb":false,"pr":{"l":"Lib","i":83}}}],"shapemaskId":"","xPos":24,"yPos":0,"tabIndex":6,"tabEnabled":true,"radioGroup":"Multiple Choice","xOffset":0,"yOffset":0,"rotateXPos":68,"rotateYPos":20.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":136,"bottom":41,"altText":"Vrai","pngfb":false,"pr":{"l":"Lib","i":28}},"html5data":{"xPos":-1,"yPos":-1,"width":137,"height":42,"strokewidth":3}},"states":[{"kind":"state","name":"_default_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":136,"bottom":41,"altText":"Vrai","pngfb":false,"pr":{"l":"Lib","i":28}},"html5data":{"xPos":-1,"yPos":-1,"width":137,"height":42,"strokewidth":3}}},{"kind":"state","name":"_default_Review","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-9,"top":-1,"right":136,"bottom":41,"altText":"Vrai","pngfb":false,"pr":{"l":"Lib","i":68}},"html5data":{"xPos":-9,"yPos":-1,"width":145,"height":42,"strokewidth":3}}},{"kind":"state","name":"_default_Disabled_Review","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-9,"top":-1,"right":136,"bottom":41,"altText":"Vrai","pngfb":false,"pr":{"l":"Lib","i":68}},"html5data":{"xPos":-9,"yPos":-1,"width":145,"height":42,"strokewidth":3}}},{"kind":"state","name":"_default_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-1,"top":-1,"right":136,"bottom":41,"altText":"Vrai","pngfb":false,"pr":{"l":"Lib","i":28}},"html5data":{"xPos":-1,"yPos":-1,"width":137,"height":42,"strokewidth":3}}},{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":136,"bottom":41,"altText":"Vrai","pngfb":false,"pr":{"l":"Lib","i":29}},"html5data":{"xPos":-1,"yPos":-1,"width":137,"height":42,"strokewidth":3}}},{"kind":"state","name":"_default_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-1,"top":-1,"right":136,"bottom":41,"altText":"Vrai","pngfb":false,"pr":{"l":"Lib","i":29}},"html5data":{"xPos":-1,"yPos":-1,"width":137,"height":42,"strokewidth":3}}},{"kind":"state","name":"_default_Selected_Review","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-9,"top":-1,"right":136,"bottom":41,"altText":"Vrai","pngfb":false,"pr":{"l":"Lib","i":69}},"html5data":{"xPos":-9,"yPos":-1,"width":145,"height":42,"strokewidth":3}}},{"kind":"state","name":"_default_Selected_Disabled_Review","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-9,"top":-1,"right":136,"bottom":41,"altText":"Vrai","pngfb":false,"pr":{"l":"Lib","i":69}},"html5data":{"xPos":-9,"yPos":-1,"width":145,"height":42,"strokewidth":3}}},{"kind":"state","name":"_default_Down_Selected","data":{"hotlinkId":"","accState":24,"vectorData":{"left":-1,"top":-1,"right":136,"bottom":41,"altText":"Vrai","pngfb":false,"pr":{"l":"Lib","i":29}},"html5data":{"xPos":-1,"yPos":-1,"width":137,"height":42,"strokewidth":3}}},{"kind":"state","name":"_default_Hover","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":136,"bottom":41,"altText":"Vrai","pngfb":false,"pr":{"l":"Lib","i":30}},"html5data":{"xPos":-1,"yPos":-1,"width":137,"height":42,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":136,"bottom":41,"altText":"Vrai","pngfb":false,"pr":{"l":"Lib","i":30}},"html5data":{"xPos":-1,"yPos":-1,"width":137,"height":42,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-1,"top":-1,"right":136,"bottom":41,"altText":"Vrai","pngfb":false,"pr":{"l":"Lib","i":30}},"html5data":{"xPos":-1,"yPos":-1,"width":137,"height":42,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":136,"bottom":41,"altText":"Vrai","pngfb":false,"pr":{"l":"Lib","i":31}},"html5data":{"xPos":-1,"yPos":-1,"width":137,"height":42,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-1,"top":-1,"right":136,"bottom":41,"altText":"Vrai","pngfb":false,"pr":{"l":"Lib","i":31}},"html5data":{"xPos":-1,"yPos":-1,"width":137,"height":42,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Down_Selected","data":{"hotlinkId":"","accState":24,"vectorData":{"left":-1,"top":-1,"right":136,"bottom":41,"altText":"Vrai","pngfb":false,"pr":{"l":"Lib","i":31}},"html5data":{"xPos":-1,"yPos":-1,"width":137,"height":42,"strokewidth":3}}}],"width":136,"height":41,"resume":true,"useHandCursor":true,"id":"5qb0VjJv7Dv","variables":[{"kind":"variable","name":"_hover","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_down","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_review","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"exe_actiongroup","id":"ActGrpUnchecked"}]},"ActGrpUnchecked":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.5br05MkX9YR.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.5br05MkX9YR._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.5br05MkX9YR"}}]}]},"ActGrpSetHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDisabledState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDownState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetReviewState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_review","operator":"set","value":{"type":"boolean","value":true}},{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_review","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollover","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollout","actions":[{"kind":"exe_actiongroup","id":"ActGrpClearHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onpress","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetDownState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"ActGrpUnchecked"},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onreleaseoutside","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]}],"shuffle":false,"depth":1,"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":-1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":0,"rotateYPos":0,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"scrolling":true,"shuffleLock":false,"width":0,"height":0,"resume":false,"useHandCursor":true,"id":""}],"shapemaskId":"","xPos":312,"yPos":278,"tabIndex":5,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":172,"rotateYPos":49,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"html5data":{"url":"","xPos":0,"yPos":0,"width":344,"height":98,"strokewidth":0}},"width":368,"height":98,"resume":true,"useHandCursor":true,"background":{"type":"vector","vectorData":{"left":0,"top":0,"right":368,"bottom":98,"altText":"Choix multiples","pngfb":false,"pr":{"l":"Lib","i":81}}},"id":"6ooL9zPhwQv"},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":36,"id":"01","url":"story_content/5mbnLQs1Kgy_80_DX676_DY676.jpg","type":"normal","altText":"Image 126.jpg","width":338,"height":70,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":312,"yPos":70,"tabIndex":4,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":169,"rotateYPos":35,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":338,"bottom":70,"altText":"Image 126.jpg","pngfb":false,"pr":{"l":"Lib","i":94}},"html5data":{"xPos":0,"yPos":0,"width":338,"height":70,"strokewidth":0}},"width":338,"height":70,"resume":true,"useHandCursor":true,"id":"6QJnnioYET9"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6ooL9zPhwQv_CorrectReview","id":"01","linkId":"6ooL9zPhwQv_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":402,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":36}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":8,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":35}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"6ooL9zPhwQv_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6ooL9zPhwQv_IncorrectReview","id":"01","linkId":"6ooL9zPhwQv_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":411,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":38}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":9,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":8,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":37}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"6ooL9zPhwQv_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');