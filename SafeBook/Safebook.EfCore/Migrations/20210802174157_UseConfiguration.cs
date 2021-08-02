using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SafeBook.EfCore.Migrations
{
    public partial class UseConfiguration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "AdressLine1", "AdressLine2", "BirthDate", "City", "Country", "FirstName", "LastName", "PhoneNumber", "PhoneNumber2", "PostalCode", "RoleId", "SecondtName" },
                values: new object[] { 1, "Krótka 4/56", null, new DateTime(2021, 8, 2, 19, 41, 56, 336, DateTimeKind.Local).AddTicks(9042), "Kraków", null, "Adam", "Stary", null, null, "30-004", 1, null });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "AdressLine1", "AdressLine2", "BirthDate", "City", "Country", "FirstName", "LastName", "PhoneNumber", "PhoneNumber2", "PostalCode", "RoleId", "SecondtName" },
                values: new object[] { 2, "Długa 98/3", null, new DateTime(2021, 8, 2, 19, 41, 56, 340, DateTimeKind.Local).AddTicks(7836), "Poznań", null, "Magda", "Młoda", null, null, "23-323", 2, null });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "AdressLine1", "AdressLine2", "BirthDate", "City", "Country", "FirstName", "LastName", "PhoneNumber", "PhoneNumber2", "PostalCode", "RoleId", "SecondtName" },
                values: new object[] { 3, "Lipna 10/5c", null, new DateTime(2021, 8, 2, 19, 41, 56, 340, DateTimeKind.Local).AddTicks(7885), "Kraków", null, "Lech", "Nijaki", null, null, "50-111", 3, null });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.InsertData(
                table: "News",
                columns: new[] { "Id", "CreationDate", "Description", "ImageName", "Title" },
                values: new object[,]
                {
                    { 1, new DateTime(2021, 8, 2, 19, 35, 22, 868, DateTimeKind.Local).AddTicks(1520), "fsdfsdDecription of this cool news", null, "News nr 1" },
                    { 2, new DateTime(2021, 8, 2, 19, 35, 22, 872, DateTimeKind.Local).AddTicks(9690), "asdasdasdasd of this cool news", null, "News nr 2" },
                    { 3, new DateTime(2021, 8, 2, 19, 35, 22, 872, DateTimeKind.Local).AddTicks(9748), "rtyrtyrty of this cool news", null, "News nr 3" }
                });

            migrationBuilder.InsertData(
                table: "Projects",
                columns: new[] { "Id", "CreationDate", "Description", "ImageName", "Title" },
                values: new object[,]
                {
                    { 1, new DateTime(2021, 8, 2, 19, 35, 22, 873, DateTimeKind.Local).AddTicks(8177), "kolejny ładny projekt", null, "Taki fajny projekt" },
                    { 2, new DateTime(2021, 8, 2, 19, 35, 22, 873, DateTimeKind.Local).AddTicks(8957), "dobrze kolega mówi, zacny", null, "A ten jaki ładny" },
                    { 3, new DateTime(2021, 8, 2, 19, 35, 22, 873, DateTimeKind.Local).AddTicks(8979), "program ewidentnie im nie leżał", null, "No, ten to nie siadł" }
                });

            migrationBuilder.InsertData(
                table: "Roles",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 1, "Admin" },
                    { 2, "BoardMember" },
                    { 3, "Member" },
                    { 4, "RegularUser" },
                    { 5, "Anonymous" }
                });
        }
    }
}
