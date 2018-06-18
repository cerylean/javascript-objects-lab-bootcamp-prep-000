var recipes = {onion: '3 cups', garlic:'2 cloves'}

function updateObjectWithKeyAndValue(object, key, value) {Object.assign ({},object, {[key]:value}); return object}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {New.object = {[key]:value}; return object}

function updateObjectWithKeyAndValue(object, key, value) {Object.assign (object, {[key]:value}); return object}
