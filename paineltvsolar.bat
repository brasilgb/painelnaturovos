@echo off
XCOPY T:\PainelTV C:\webserver\apache\htdocs\painelsolar\build\PainelTV /d /e /c /i /h /r /k /y
XCOPY T:\PainelTV C:\webserver\apache\htdocs\painelsolar\public\PainelTV /d /e /c /i /h /r /k /y
timeout 1