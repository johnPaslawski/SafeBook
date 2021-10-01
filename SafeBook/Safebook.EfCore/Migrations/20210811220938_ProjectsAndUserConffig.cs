using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SafeBook.EfCore.Migrations
{
    public partial class ProjectsAndUserConffig : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Projects",
                columns: new[] { "Id", "CreationDate", "Description", "ImageName", "Title" },
                values: new object[,]
                {
                    { 1, new DateTime(2021, 8, 12, 0, 9, 37, 605, DateTimeKind.Local).AddTicks(7334), "kolejny ładny projekt", null, "Taki fajny projekt" },
                    { 2, new DateTime(2021, 8, 12, 0, 9, 37, 608, DateTimeKind.Local).AddTicks(8806), "dobrze kolega mówi, zacny", null, "A ten jaki ładny" },
                    { 3, new DateTime(2021, 8, 12, 0, 9, 37, 608, DateTimeKind.Local).AddTicks(8897), "program ewidentnie im nie leżał", null, "No, ten to nie siadł" }
                });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "AdressLine1", "AdressLine2", "BirthDate", "City", "Country", "FirstName", "LastName", "PhoneNumber", "PhoneNumber2", "PostalCode", "RoleId", "SecondtName" },
                values: new object[,]
                {
                    { 1, "Krótka 4/56", null, new DateTime(2021, 8, 12, 0, 9, 37, 610, DateTimeKind.Local).AddTicks(7269), "Kraków", null, "Adam", "Stary", null, null, "30-004", 1, null },
                    { 2, "Długa 98/3", null, new DateTime(2021, 8, 12, 0, 9, 37, 610, DateTimeKind.Local).AddTicks(9342), "Poznań", null, "Magda", "Młoda", null, null, "23-323", 2, null },
                    { 3, "Lipna 10/5c", null, new DateTime(2021, 8, 12, 0, 9, 37, 610, DateTimeKind.Local).AddTicks(9358), "Kraków", null, "Lech", "Nijaki", null, null, "50-111", 3, null }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Projects",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Projects",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Projects",
                keyColumn: "Id",
                keyValue: 3);

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
                    { 1, new DateTime(2021, 8, 12, 0, 6, 7, 155, DateTimeKind.Local).AddTicks(5251), "fsdfsdDecription of this cool news", null, "News nr 1" },
                    { 2, new DateTime(2021, 8, 12, 0, 6, 7, 158, DateTimeKind.Local).AddTicks(7792), "asdasdasdasd of this cool news", null, "News nr 2" },
                    { 3, new DateTime(2021, 8, 12, 0, 6, 7, 158, DateTimeKind.Local).AddTicks(7828), "rtyrtyrty of this cool news", null, "News nr 3" }
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
