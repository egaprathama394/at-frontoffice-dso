Feature: Add Promo Outlet Dealer

    Scenario: a admin Outlet Dealer1 try to open form add promo
        Given login Frontoffice as admin "Outlet Dealer1"
        Given at Promo Page
        Given at add promo form
        Then a admin "Outlet Dealer1" see all field blank

    Scenario: a admin Outlet Dealer1 try to add blank data promo
        Given login Frontoffice as admin "Outlet Dealer1"
        Given at add promo form
        When a admin click add simpan button
        Then a admin "Outlet Dealer1" can see notification mandatory field at add promo form

    Scenario: a admin Outlet Dealer1 try to add new promo
        Given login Frontoffice as admin "Outlet Dealer1"
        Given at add promo form
        Given all field has filled by "Outlet Dealer1"
        When a admin click add simpan button
        Then a admin can see notification success add new promo
        Then a admin sync promo data
    
    Scenario Outline: check add data promo at frontoffice as another auth that can see the data
        Given login Frontoffice as admin "<authCan>"
        Given at Promo Page
        When a admin search data Promo
        Then a admin "<authCan>" can found the data Promo
Examples:
| authCan |
| HO |
| Outlet Dealer1 |

    Scenario Outline: check add data promo at frontoffice as another auth that can't see the data
        Given login Frontoffice as admin "<authCant>"
        Given at Promo Page
        When a admin search data Promo
        Then a admin can't found the data Promo 
Examples:
| authCant | 
| Outlet DSO1 | 
| Outlet Dealer2 |

    Scenario: check add data promo at daytona web
        Given at "Outlet Dealer1" Page Daytona Web
        When open detail promo that was added 
        Then can found the data promo that was added

    Scenario Outline: check add data promo at daytona web
        Given at "<authDAY>" Page Daytona Web
        Then can't found the data promo that was added
Examples:
| authDAY |
| Outlet Dealer2 |
| Outlet DSO1 |
| HO |