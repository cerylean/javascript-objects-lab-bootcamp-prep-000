var recipes = {onion: '3 cups', garlic:'2 cloves'}

function updateObjectWithKeyAndValue(object, key, value) {return Object.assign ({},object, {[key]:value})}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {[key]:value}; return object}


