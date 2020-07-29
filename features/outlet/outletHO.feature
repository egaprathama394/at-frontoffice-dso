Feature: Outlet Menu HO

   # Scenario: Admin HO try to see data outlet
   # Given login Frontoffice as admin "HO"
   # Given at outlet page by outlet menu
   # Then admin ho can see data outlet

   # Scenario: Admin HO try to see detail outlet
   # Given login Frontoffice as admin "HO"
   # Given at Outlet Page
   # When admin ho click detail outlet
   # Then admin ho can see detail outlet

   Scenario: Admin HO try to maintain url and logo outlet
   Given login Frontoffice as admin "HO"
   Given at Detail Outlet form
   Given url and logo updated
   When admin ho save data outlet
   Then admin can see notification success update outlet data

   Scenario: Admin try to check updated url outlet at frontoffice
   Given login Frontoffice as admin "Outlet Dealer1"
   Given at Outlet Page
   Then admin can see url outlet updated

   Scenario: Admin try to check updated url and logo outlet at daytona
   When admin access url outlet that was updated
   Then admin can see outlet page and logo updated