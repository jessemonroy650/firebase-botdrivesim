//
//
//

var fbBotNavigate = {
	
	clear : function(a) {
    	a = {"left": "0",
			"right": "0",
			"forward": "0",
			"backward": "0",
			"stop": "0",
			"dead": "0"
		}
		return a;
	},

	driveBot : function(b) {
		//
	    if (b.d == 'l') {
    	    botNavigate.left  = 1;
	    } else {
    	    botNavigate.left  = 0;
	    }
    	if (b.d == 'r') {
        	botNavigate.right = 1;
	    } else {
    	    botNavigate.right = 0;
	    }
    	if (b.d == 'b') {
        	botNavigate.backward = 1;
	    } else {
    	    botNavigate.backward = 0;
	    }
    	if (b.d == 'f') {
	        botNavigate.forward  = 1;
	    } else {
    	    botNavigate.forward  = 0;
	    }
    	// The top is pointing straight up, almost 90° to the horizon.
	    if (b.s == '0') {
    	    botNavigate.stop = 1;
	    } else {
	        botNavigate.stop = 0;
    	}
	}
};