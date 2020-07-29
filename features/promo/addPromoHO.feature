Feature: Add Promo HO

    Scenario: a admin HO try to open form add promo
        Given login Frontoffice as admin "HO"
        Given at Promo Page
        Given at add promo form
        Then a admin "HO" see all field blank

    Scenario: a admin HO try to add blank data promo
        Given login Frontoffice as admin "HO"
        Given at add promo form
        When a admin click add simpan button
        Then a admin "HO" can see notification mandatory field at add promo form

    Scenario: a admin HO try to add new promo
        Given login Frontoffice as admin "HO"
        Given at add promo form
        Given all field has filled by "HO"
        When a admin click add simpan button
        Then a admin can see notification success add new promo
        Then a admin sync promo data
    
    Scenario: check add data promo at frontoffice as another auth that can see the data
        Given login Frontoffice as admin "HO"
        Given at Promo Page
        When a admin search data Promo
        Then a admin "HO" can found the data Promo

    Scenario Outline: check add data promo at frontoffice as another auth that can't see the data
        Given login Frontoffice as admin "<authCant>"
        Given at Promo Page
        When a admin search data Promo
        Then a admin can't found the data Promo 
Examples:
| authCant |
| Outlet DSO1 |
| Outlet Dealer1 |

    Scenario: check add data promo at daytona web
        Given at Promo Page Daytona Web
        When open detail promo that was added
        Then can found the data promo that was added