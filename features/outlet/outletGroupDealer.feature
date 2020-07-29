Feature: Outlet Menu Group Dealer

   Scenario: Admin Dealer Group try to see data outlet
      Given login Frontoffice as admin "Group Dealer"
      Given at outlet page by outlet menu
      Then admin dealer group can see data outlet

   Scenario: Admin Dealer Group try to see detail outlet
      Given login Frontoffice as admin "Group Dealer"
      Given at Outlet Page
      When admin dealer group click detail outlet
      Then admin dealer gorup can see detail outlet

   Scenario: Admin HO try to maintain gambar outlet
      Given login Frontoffice as admin "Group Dealer"
      Given at Detail Outlet Tunas Cilegon form
      Given gambar outlet updated
      When admin dealer group save data outlet
      Then admin can see notification success update outlet data

   Scenario: Admin try to check updated url and logo outlet at daytona
      Given at "Outlet Dealer1" Page Daytona Web
      Then admin can see outlet images updated