/*
!------------------------> Event <------------------------
*javascript ma jatna bi event ha wo sequential run hota ha kuch exception ha bi ha

*asa he exception hamara browser ka event bi ha. Event hama kisi activity per invoke hota ha

*javascript ak sequential run language ha 
*kii dafa hmm sequential ko toda sa ignore kar ka bi gata ha

*/

/*

!------------------------> Event Propogation <------------------------ 
                ? event propogation ka 2 context hota ha

* 1) bubbling (default & false) -----> (child to parent) & (inner to outer)
* 2) capturing (true) -----> (parent to child) & (outer to inner)

?  baz dafa hmm outer element per alag script lagata ha or inner element per alag script lagata ha to ya problem create kar data ha. is problem ko solve karna ka lia hm 1 methord use karta ha.

* stopPropagation() 
? ya method event ko stop kar data ha

*/

/* 
!------------------------> Mouse Event <------------------------
* 1) click
* 2) dblclick
* 3) mouseenter
* 4) mouseleave
* 5) mouseover
* 6) mouseout
* 7) mousemove
* 8) mousedown
* 9) mouseup
!------------------------> Keyboard Event <------------------------
* 1) keydown
* 2) keypress
* 3) keyup
!------------------------> Form Event <------------------------
* 1) submit
* 2) reset
* 3) focus
* 4) blur
* 5) change
* 6) select
* 7) input
!------------------------> Window Event <------------------------
* 1) load
* 2) resize
* 3) scroll
* 4) unload
* 5) open
* 6) close
* 7) wheel
!------------------------> window methord+ <------------------------
? 1) window.alert()
? 4) window.open()
? 5) window.close()
? 6) window.moveTo()
? 7) window.resizeTo()
? 8) window.location
* 11) window.screen
? 12) window.document
* 14) window.parent
* 15) window.top
* 18) window.name
* 21) window.innerWidth
* 22) window.innerHeight
* 23) window.outerWidth
* 24) window.outerHeight
* 25) window.pageXOffset
* 26) window.pageYOffset
* 27) window.screenX
* 28) window.screenY
* 29) window.screenLeft
* 30) window.screenTop
* 31) window.scrollX
* 32) window.scrollY
* 33) window.scrollBy()
* 34) window.scrollTo()
* 35) window.addEventListener()
* 36) window.removeEventListener()
* 42) window.onblur
* 45) window.onchange
* 46) window.onclick

!------------------------> event object <------------------------
* 1) event.altKey
* 2) event.button
? 3) event.clientX
? 4) event.clientY
* 5) event.ctrlKey
? 6) event.currentTarget
* 7) event.data
* 8) event.dataTransfer
? 9) event.defaultPrevented
* 10) event.detail
* 11) event.eventPhase
* 12) event.fromElement
* 13) event.key
* 14) event.keyCode
* 15) event.metaKey
* 16) event.movementX
* 17) event.movementY
? 18) event.offsetX
? 19) event.offsetY
? 20) event.pageX
? 21) event.pageY
* 22) event.relatedTarget
* 23) event.returnValue
? 24) event.screenX
? 25) event.screenY
* 26) event.shiftKey
? 27) event.srcElement
? 28) event.target
? 29) event.timeStamp
? 30) event.toElement
? 31) event.type
* 32) event.view
* 33) event.which
* 34) event.x
* 35) event.y
* 36) event.isTrusted
* 37) event.path
* 38) event.cancelable
* 39) event.composed
* 40) event.isComposing
* 41) event.locale
* 42) event.repeat
* 43) event.charCode
* 44) event.code
* 45) event.location
* 46) event.initEvent()
? 47) event.preventDefault()
? 48) event.stopPropagation()
* 49) event.stopImmediatePropagation()
* 50) event.initCustomEvent()
* 51) event.initUIEvent()
* 52) event.initKeyboardEvent()
* 53) event.initMouseEvent()
* 54) event.initMutationEvent()
* 55) event.initProgressEvent()
* 56) event.initStorageEvent()
* 57) event.initTouchEvent()
* 58) event.initTransitionEvent()
* 59) event.initWheelEvent()
* 60) event.getModifierState()
*/