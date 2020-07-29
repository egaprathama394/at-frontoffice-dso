Feature: Outlet Menu DSO

   Scenario: Admin HO try to see data outlet
   Given login Frontoffice as admin "Outlet DSO1"
   Given at Outlet Page
   Then admin can see data outlet

   Scenario: Admin HO try to maintain gambar outlet
   Given login Frontoffice as admin "Outlet DSO1"
   Given at Outlet Page
   Given gambar outlet updated
   When admin save data outlet
   Then admin can see notification success update outlet data

   Scenario: Admin try to check updated images outlet at daytona
   Given at "Outlet DSO1" Page Daytona Web
   Then admin can see outlet images updated
