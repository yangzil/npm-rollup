import { version } from '../package.json';

const util = {
    test: function() {
        console.log('firstVersion ' + version);
        return version + 'lastVersion'
    }
}
window.util = util

export default util