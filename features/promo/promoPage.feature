Feature: Promo Page

    Scenario Outline: a admin try to see data promo from menu promo 
        Given login Frontoffice as admin "<auth>"
        When a admin access Promo Page from menu Promo
        Then a admin can see data promo "<auth>"
Examples:
| auth |
| HO  |
| Outlet DSO1  |
| Outlet Dealer1  |
| Group Dealer |

#     Scenario Outline: a admin try to search promo
#         Given login Frontoffice as admin "<auth>"
#         Given at Promo Page
#         When a admin insert text on serach field
#         Then a admin can see the data realated by search
# Examples:
# | auth |
# | HO  |
# | Outlet DSO1  |
# | Outlet Dealer1  |
# | Group Dealer |
#     Scenario Outline: a admin try tp sync data promo
#         Given login Frontoffice as admin "<auth>"
#         Given at Promo Page
#         When a admin click sync button
#         Then a admin can see sync success notification
# Examples:
# | auth |
# | HO  |
# | Outlet DSO1  |
# | Outlet Dealer1 |
# | Group Dealer |
    # Scenario Outline: check dropdown field berlaku
    #     Given login Frontoffice as admin "<auth>"
    #     Given at Promo Page
    #     Given at add promo form
    #     When a admin click field Berlaku
    #     Then a admin can see dropdown Website, Aplikasi, and Dealer
