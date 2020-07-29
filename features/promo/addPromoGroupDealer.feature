Feature: Add Promo Group Dealer

    Scenario: a admin Group Dealer try to open form add promo
       Given login Frontoffice as admin "Group Dealer"
        Given at Promo Page
        Given at add promo form
        Then a admin "Group Dealer" see all field blank

    Scenario: a admin Group Dealer try to add blank data promo
        Given login Frontoffice as admin "Group Dealer"
        Given at add promo form
        When a admin click add simpan button
        Then a admin "Group Dealer" can see notification mandatory field at add promo form 

    Scenario: a admin Group Dealer try to add new promo
        Given login Frontoffice as admin "Group Dealer"
        Given at add promo form
        Given all field has filled by "Group Dealer"
        When a admin click add simpan button
        Then a admin can see notification success add new promo
        Then a admin sync promo data
    
    Scenario Outline: check add data promo at frontoffice as another auth that can see the data
        Given login Frontoffice as admin "<auth>"
        Given at Promo Page
        When a admin search data Promo
        Then a admin "<auth>" can found the data Promo
Examples:
| authCant |
| Outlet Dealer1 |
| HO |

    Scenario: check add data promo at frontoffice as another auth that can't see the data
        Given login Frontoffice as admin "Outlet DSO1"
        Given at Promo Page
        When a admin search data Promo
        Then a admin can't found the data Promo 

    Scenario: check add data promo at daytona web
        Given at "Outlet Dealer1" Page Daytona Web
        When open detail promo that was added 
        Then can found the data promo that was added