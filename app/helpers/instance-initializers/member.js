export function initialize( appInstance ) {
  appInstance.inject('route', 'index', 'service:member');

}

export default {
  name: 'member',
  initialize
};
