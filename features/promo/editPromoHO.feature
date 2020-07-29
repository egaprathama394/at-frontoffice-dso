Feature: Edit Promo HO
    
    Scenario: a admin HO try to open form edit promo
        Given login Frontoffice as admin "HO"
        Given at edit promo form
        Then a admin see all field is filled

    Scenario: a admin HO try to edit promo to be blank filed
        Given login Frontoffice as admin "HO"
        Given at edit promo form
        Given all filed edit promo is blank
        When a admin click edit simpan button
        Then a admin can see notification mandatory field at edit promo page    

    Scenario: a admin HO try to edit promo with status Active
        Given login Frontoffice as admin "HO"
        Given at edit promo form
        Given all field has changed
        When a admin click edit simpan button
        Then a admin can see notification success edit promo
        Then a admin sync promo data

    Scenario: check edit data promo at frontoffice that was edited
        Given login Frontoffice as admin "HO"
        Given at Promo Page
        When a admin search data Promo
        Then a admin can found data Promo was edited

    Scenario: check add data on Daytona Web
        Given at Promo Page Daytona Web
        When open detail promo that was edited
        Then can found the data promo that was edited

    Scenario: a admin HO try to edit promo with status Inactive
        Given login Frontoffice as admin "HO"
        Given at edit promo form
        Given data promo changed to inactive
        When a admin click edit simpan button
        Then a admin can see notification success edit promo
        Then a admin sync promo data

    Scenario Outline: check edit data promo at daytona web
        Given at Promo Page Daytona Web
        Then can't found the data promo that was edited