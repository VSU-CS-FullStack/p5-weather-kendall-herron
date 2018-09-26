export default function(state = null, action) {    
	console.log('Action received (post middleware):', action);
	return state;
}