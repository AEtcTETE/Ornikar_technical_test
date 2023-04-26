@footer
Feature: footer
    In order to provide mandatory information to the user, I check that the footer contains the information required
    As a user
    I want to see footer mandatory elements and access to the pages and their content

    @ui @footerlinks
    Scenario: Check the redirection links for the redirections to the different sites
        Given a user is on the webpage Ornikar
        When the user goes to the link in the footer
            | regul | linkName                  | button            | expectedDescription                                                                                       |
            | fr    | constructeurs             | constructors      | Le prix de l’assurance auto d’un véhicule dépend de plusieurs critères                                    |
            | fr    | jeuneConducteur           | jeuneConducteur   | On se bat pour les jeunes ou on ne se bat pas.                                                            |
            | fr    | souscription              | souscription      | Pour être autorisés à circuler le long des routes françaises                                              |
            | fr    | administratif             | administratif     | Comme toutes les obligations administratives                                                              |
            | fr    | couverture                | couverture        | Lorsque des usagers de la route réalisent une demande de devis d’assurance auto                           |
            | fr    | indemnisation             | indemnisation     | Lorsque des usagers de la route sont impliqués d’une manière ou d’une autre dans un accident de la route  |
            | fr    | sinistre                  | sinistre          | Tous les véhicules qui circulent le long du réseau routier français peuvent                               |
            | fr    | categorieVehicule         | categorieVehicule | Si pour pouvoir circuler le long des routes françaises                                                    |
        Then the user should see text content in the page        