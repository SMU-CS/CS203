import Keycloak from "keycloak-js"

const keycloak = new Keycloak({
    url: 'http://keycloak-alb-427916872.ap-southeast-1.elb.amazonaws.com/',
    realm: 'eztix',
    clientId: 'eztix-webapp'
});

export default keycloak;